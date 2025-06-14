const Application = require('../models/application.model');
const Job = require('../models/job.model');
const Candidate = require('../models/candidate.model');
const Resume = require('../models/resume.model');
const Recruiter = require('../models/recruiter.model');
const notification = require('../utils/notification');

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private
exports.getApplications = async (req, res) => {
  try {
    let query;

    // Different behavior based on user role
    if (req.user.role === 'candidate') {
      // Candidates can only see their own applications
      const candidate = await Candidate.findOne({ user: req.user.id });
      
      if (!candidate) {
        return res.status(404).json({
          success: false,
          error: 'Candidate profile not found'
        });
      }
      
      query = Application.find({ candidate: candidate._id })
        .populate({
          path: 'job',
          select: 'title company location status',
          populate: {
            path: 'recruiter',
            select: 'company'
          }
        })
        .populate('resume', 'title');
    } else if (req.user.role === 'recruiter') {
      // Recruiters can only see applications for their jobs
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      
      if (!recruiter) {
        return res.status(404).json({
          success: false,
          error: 'Recruiter profile not found'
        });
      }
      
      const jobs = await Job.find({ recruiter: recruiter._id });
      const jobIds = jobs.map(job => job._id);
      
      query = Application.find({ job: { $in: jobIds } })
        .populate('job', 'title company location')
        .populate({
          path: 'candidate',
          select: 'skills education experience',
          populate: {
            path: 'user',
            select: 'name email'
          }
        })
        .populate('resume', 'title file');
    } else if (req.user.role === 'admin') {
      // Admins can see all applications
      query = Application.find()
        .populate('job', 'title company location')
        .populate({
          path: 'candidate',
          populate: {
            path: 'user',
            select: 'name email'
          }
        })
        .populate('resume', 'title file');
    }

    // Filtering
    const { status, job } = req.query;
    
    if (status) {
      query = query.find({ status });
    }
    
    if (job) {
      query = query.find({ job });
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Application.countDocuments(query);

    query = query.skip(startIndex).limit(limit);

    // Execute query
    const applications = await query;

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
      count: applications.length,
      pagination,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single application
// @route   GET /api/applications/:id
// @access  Private
exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('job', 'title company location status')
      .populate({
        path: 'candidate',
        populate: {
          path: 'user',
          select: 'name email'
        }
      })
      .populate('resume', 'title file');

    if (!application) {
      return res.status(404).json({
        success: false,
        error: 'Application not found'
      });
    }

    // Check authorization
    if (req.user.role === 'candidate') {
      const candidate = await Candidate.findOne({ user: req.user.id });
      if (!candidate || application.candidate.toString() !== candidate._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to view this application'
        });
      }
    } else if (req.user.role === 'recruiter') {
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      const job = await Job.findById(application.job);
      if (!recruiter || !job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to view this application'
        });
      }
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Create new application
// @route   POST /api/applications
// @access  Private (Candidate only)
exports.createApplication = async (req, res) => {
  try {
    const { job: jobId, resume: resumeId, coverLetter } = req.body;

    // Check if user is a candidate
    if (req.user.role !== 'candidate') {
      return res.status(403).json({
        success: false,
        error: 'Only candidates can apply for jobs'
      });
    }

    // Get candidate profile
    const candidate = await Candidate.findOne({ user: req.user.id });
    if (!candidate) {
      return res.status(404).json({
        success: false,
        error: 'Candidate profile not found'
      });
    }

    // Check if job exists and is open
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        error: 'Job not found'
      });
    }

    if (job.status !== 'Open') {
      return res.status(400).json({
        success: false,
        error: 'This job is no longer accepting applications'
      });
    }

    // Check if resume exists and belongs to candidate
    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({
        success: false,
        error: 'Resume not found'
      });
    }

    if (resume.candidate.toString() !== candidate._id.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to use this resume'
      });
    }

    // Check if candidate has already applied for this job
    const existingApplication = await Application.findOne({
      job: jobId,
      candidate: candidate._id
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        error: 'You have already applied for this job'
      });
    }

    // Create application
    const application = await Application.create({
      job: jobId,
      candidate: candidate._id,
      resume: resumeId,
      coverLetter
    });

    // Send notification to recruiter
    const recruiter = await Recruiter.findById(job.recruiter).populate('user', 'email');
    if (recruiter && recruiter.user && recruiter.user.email) {
      notification.sendEmail({
        to: recruiter.user.email,
        subject: `New Application for ${job.title}`,
        text: `A new candidate has applied for your job posting: ${job.title}`
      });
    }

    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Update application status
// @route   PUT /api/applications/:id
// @access  Private (Recruiter only, owner)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        error: 'Application not found'
      });
    }

    // Check if user is recruiter and owns the job
    if (req.user.role !== 'recruiter' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this application'
      });
    }

    if (req.user.role === 'recruiter') {
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      const job = await Job.findById(application.job);
      if (!recruiter || !job || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to update this application'
        });
      }
    }

    // Update status
    application.status = status || application.status;

    // Add note if provided
    if (notes) {
      application.notes.push({
        text: notes,
        createdBy: req.user.id
      });
    }

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
        subject: `Application Status Update - ${job ? job.title : 'Job Position'}`,
        text: `Your application status has been updated to: ${application.status}`
      });
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
