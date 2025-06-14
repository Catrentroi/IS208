const Interview = require('../models/interview.model');
const Application = require('../models/application.model');
const Candidate = require('../models/candidate.model');
const Recruiter = require('../models/recruiter.model');
const Job = require('../models/job.model');
const notification = require('../utils/notification');

// @desc    Get all interviews
// @route   GET /api/interviews
// @access  Private
exports.getInterviews = async (req, res) => {
  try {
    let query;

    // Different behavior based on user role
    if (req.user.role === 'candidate') {
      // Candidates can only see their own interviews
      const candidate = await Candidate.findOne({ user: req.user.id });
      
      if (!candidate) {
        return res.status(404).json({
          success: false,
          error: 'Candidate profile not found'
        });
      }
      
      const applications = await Application.find({ candidate: candidate._id });
      const applicationIds = applications.map(app => app._id);
      
      query = Interview.find({ application: { $in: applicationIds } })
        .populate({
          path: 'application',
          populate: {
            path: 'job',
            select: 'title company location',
          }
        })
        .populate('interviewer', 'name');
    } else if (req.user.role === 'recruiter') {
      // Recruiters can only see interviews for their jobs
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      
      if (!recruiter) {
        return res.status(404).json({
          success: false,
          error: 'Recruiter profile not found'
        });
      }
      
      const jobs = await Job.find({ recruiter: recruiter._id });
      const jobIds = jobs.map(job => job._id);
      const applications = await Application.find({ job: { $in: jobIds } });
      const applicationIds = applications.map(app => app._id);
      
      query = Interview.find({ application: { $in: applicationIds } })
        .populate({
          path: 'application',
          populate: [
            {
              path: 'job',
              select: 'title company location'
            },
            {
              path: 'candidate',
              populate: {
                path: 'user',
                select: 'name email'
              }
            }
          ]
        })
        .populate('interviewer', 'name');
    } else if (req.user.role === 'admin') {
      // Admins can see all interviews
      query = Interview.find()
        .populate({
          path: 'application',
          populate: [
            {
              path: 'job',
              select: 'title company location'
            },
            {
              path: 'candidate',
              populate: {
                path: 'user',
                select: 'name email'
              }
            }
          ]
        })
        .populate('interviewer', 'name');
    }

    // Filtering
    const { status, scheduledAfter, scheduledBefore } = req.query;
    
    if (status) {
      query = query.find({ status });
    }
    
    if (scheduledAfter) {
      query = query.find({ scheduledAt: { $gte: new Date(scheduledAfter) } });
    }
    
    if (scheduledBefore) {
      query = query.find({ scheduledAt: { $lte: new Date(scheduledBefore) } });
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Interview.countDocuments(query);

    query = query.skip(startIndex).limit(limit);

    // Execute query
    const interviews = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: interviews.length,
      pagination,
      data: interviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single interview
// @route   GET /api/interviews/:id
// @access  Private
exports.getInterview = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id)
      .populate({
        path: 'application',
        populate: [
          {
            path: 'job',
            select: 'title company location'
          },
          {
            path: 'candidate',
            populate: {
              path: 'user',
              select: 'name email'
            }
          }
        ]
      })
      .populate('interviewer', 'name');

    if (!interview) {
      return res.status(404).json({
        success: false,
        error: 'Interview not found'
      });
    }

    // Check authorization
    if (req.user.role === 'candidate') {
      const candidate = await Candidate.findOne({ user: req.user.id });
      if (!candidate) {
        return res.status(404).json({
          success: false,
          error: 'Candidate profile not found'
        });
      }
      
      const application = await Application.findById(interview.application);
      if (!application || application.candidate.toString() !== candidate._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to view this interview'
        });
      }
    } else if (req.user.role === 'recruiter') {
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      if (!recruiter) {
        return res.status(404).json({
          success: false,
          error: 'Recruiter profile not found'
        });
      }
      
      const application = await Application.findById(interview.application);
      const job = await Job.findById(application.job);
      if (!job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to view this interview'
        });
      }
    }

    res.status(200).json({
      success: true,
      data: interview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Schedule new interview
// @route   POST /api/interviews
// @access  Private (Recruiter only)
exports.scheduleInterview = async (req, res) => {
  try {
    const { application: applicationId, scheduledAt, duration, location, locationDetails } = req.body;

    // Check if user is a recruiter
    if (req.user.role !== 'recruiter' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Only recruiters can schedule interviews'
      });
    }

    // Check if application exists
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({
        success: false,
        error: 'Application not found'
      });
    }

    // For recruiters, verify they own the related job
    if (req.user.role === 'recruiter') {
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      const job = await Job.findById(application.job);
      if (!recruiter || !job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to schedule interview for this application'
        });
      }
    }

    // Create interview
    const interview = await Interview.create({
      application: applicationId,
      interviewer: req.user.id,
      scheduledAt,
      duration,
      location,
      locationDetails
    });

    // Update application status
    application.status = 'Interviewing';
    await application.save();

    // Send notification to candidate
    const candidate = await Candidate.findById(application.candidate).populate({
      path: 'user',
      select: 'email'
    });

    if (candidate && candidate.user && candidate.user.email) {
      const job = await Job.findById(application.job);
      notification.sendEmail({
        to: candidate.user.email,
        subject: `Interview Scheduled - ${job ? job.title : 'Job Position'}`,
        text: `You have been scheduled for an interview on ${new Date(scheduledAt).toLocaleString()}. Location: ${location} ${locationDetails ? '- ' + locationDetails : ''}`
      });
    }

    res.status(201).json({
      success: true,
      data: interview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Update interview
// @route   PUT /api/interviews/:id
// @access  Private (Recruiter only, owner)
exports.updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        error: 'Interview not found'
      });
    }

    // Check authorization
    if (req.user.role === 'recruiter') {
      const application = await Application.findById(interview.application);
      const job = await Job.findById(application.job);
      const recruiter = await Recruiter.findOne({ user: req.user.id });

      if (!recruiter || !job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to update this interview'
        });
      }
    } else if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this interview'
      });
    }

    // Update interview
    const updatedInterview = await Interview.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    // If interview was rescheduled, notify the candidate
    if (req.body.scheduledAt && req.body.scheduledAt !== interview.scheduledAt.toString()) {
      const application = await Application.findById(interview.application);
      const candidate = await Candidate.findById(application.candidate).populate({
        path: 'user',
        select: 'email'
      });
      const job = await Job.findById(application.job);

      if (candidate && candidate.user && candidate.user.email) {
        notification.sendEmail({
          to: candidate.user.email,
          subject: `Interview Rescheduled - ${job ? job.title : 'Job Position'}`,
          text: `Your interview has been rescheduled to ${new Date(req.body.scheduledAt).toLocaleString()}.`
        });
      }
    }

    res.status(200).json({
      success: true,
      data: updatedInterview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Add interview feedback
// @route   PUT /api/interviews/:id/feedback
// @access  Private (Recruiter only, owner)
exports.addInterviewFeedback = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        error: 'Interview not found'
      });
    }

    // Check authorization
    if (req.user.role === 'recruiter') {
      const application = await Application.findById(interview.application);
      const job = await Job.findById(application.job);
      const recruiter = await Recruiter.findOne({ user: req.user.id });

      if (!recruiter || !job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to add feedback to this interview'
        });
      }
    } else if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to add feedback to this interview'
      });
    }

    // Update interview with feedback
    interview.feedback = req.body;
    interview.status = 'Completed';
    await interview.save();

    // Update application status based on feedback recommendation
    if (req.body.recommendation) {
      const application = await Application.findById(interview.application);
      
      if (req.body.recommendation === 'Proceed') {
        application.status = 'Shortlisted';
      } else if (req.body.recommendation === 'Reject') {
        application.status = 'Rejected';
      }
      
      await application.save();
    }

    res.status(200).json({
      success: true,
      data: interview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
