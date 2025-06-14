const Job = require('../models/job.model');
const Recruiter = require('../models/recruiter.model');
const User = require('../models/user.model');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
exports.getJobs = async (req, res) => {
  try {
    // Build query
    let query = Job.find().populate('recruiter', 'company');

    // Filtering
    const { title, location, jobType, company, minSalary, maxSalary, status, skills, experience } = req.query;

    if (title) {
      query = query.find({ title: { $regex: title, $options: 'i' } });
    }

    if (location) {
      query = query.find({ location: { $regex: location, $options: 'i' } });
    }

    if (jobType) {
      query = query.find({ jobType });
    }

    if (company) {
      query = query.find({ company: { $regex: company, $options: 'i' } });
    }

    if (minSalary) {
      query = query.find({ 'salary.min': { $gte: Number(minSalary) } });
    }

    if (maxSalary) {
      query = query.find({ 'salary.max': { $lte: Number(maxSalary) } });
    }

    if (status) {
      query = query.find({ status });
    } else {
      // Default to only showing open jobs for public listing
      if (!req.user || req.user.role !== 'recruiter') {
        query = query.find({ status: 'Open' });
      }
    }

    if (skills) {
      const skillsArray = skills.split(',').map(skill => skill.trim());
      query = query.find({ skills: { $in: skillsArray } });
    }

    if (experience) {
      query = query.find({ experience });
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Job.countDocuments(query);

    query = query.skip(startIndex).limit(limit);

    // Execute query
    const jobs = await query;

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
      count: jobs.length,
      pagination,
      data: jobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('recruiter', 'company companyDescription companyWebsite');

    if (!job) {
      return res.status(404).json({
        success: false,
        error: 'Job not found'
      });
    }

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Create new job
// @route   POST /api/jobs
// @access  Private (Recruiter only)
exports.createJob = async (req, res) => {
  try {
    // Check if user is a recruiter
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({
        success: false,
        error: 'Only recruiters can post jobs'
      });
    }

    // Get recruiter profile
    const recruiter = await Recruiter.findOne({ user: req.user.id });
    if (!recruiter) {
      return res.status(404).json({
        success: false,
        error: 'Recruiter profile not found'
      });
    }

    // Create job
    const job = await Job.create({
      ...req.body,
      recruiter: recruiter._id,
      company: recruiter.company
    });

    res.status(201).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private (Recruiter only, owner)
exports.updateJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        error: 'Job not found'
      });
    }

    // Check if user is recruiter and owns the job
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this job'
      });
    }

    const recruiter = await Recruiter.findOne({ user: req.user.id });
    if (!recruiter || job.recruiter.toString() !== recruiter._id.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this job'
      });
    }

    // Update job
    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private (Recruiter only, owner)
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        error: 'Job not found'
      });
    }

    // Check if user is recruiter and owns the job
    if (req.user.role !== 'recruiter' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this job'
      });
    }

    if (req.user.role === 'recruiter') {
      const recruiter = await Recruiter.findOne({ user: req.user.id });
      if (!recruiter || job.recruiter.toString() !== recruiter._id.toString()) {
        return res.status(403).json({
          success: false,
          error: 'Not authorized to delete this job'
        });
      }
    }

    await job.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
