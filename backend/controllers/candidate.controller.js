const Candidate = require('../models/candidate.model');
const Resume = require('../models/resume.model');
const User = require('../models/user.model');

// @desc    Get candidate profile
// @route   GET /api/candidates/:id
// @access  Public
exports.getCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id).populate('user', 'name email');

    if (!candidate) {
      return res.status(404).json({
        success: false,
        error: 'Candidate not found'
      });
    }

    res.status(200).json({
      success: true,
      data: candidate
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Create or update candidate profile
// @route   PUT /api/candidates
// @access  Private (Candidate only)
exports.updateCandidateProfile = async (req, res) => {
  try {
    // Check if the user is a candidate
    const user = await User.findById(req.user.id);
    if (user.role !== 'candidate') {
      return res.status(403).json({
        success: false,
        error: 'Only candidates can update candidate profiles'
      });
    }

    // Build candidate profile object
    console.log('Updating candidate profile with data:', JSON.stringify(req.body, null, 2));
    const profileFields = {
      user: req.user.id,
      ...req.body
    };

    let candidate = await Candidate.findOne({ user: req.user.id });

    if (candidate) {
      // Update
      candidate = await Candidate.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, runValidators: true }
      );
    } else {
      // Create
      candidate = await Candidate.create(profileFields);
    }

    res.status(200).json({
      success: true,
      data: candidate
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Add resume to candidate
// @route   POST /api/candidates/resumes
// @access  Private (Candidate only)
exports.addResume = async (req, res) => {
  try {
    // Check if the user is a candidate
    const user = await User.findById(req.user.id);
    if (user.role !== 'candidate') {
      return res.status(403).json({
        success: false,
        error: 'Only candidates can add resumes'
      });
    }

    // Check if candidate profile exists
    const candidate = await Candidate.findOne({ user: req.user.id });
    if (!candidate) {
      return res.status(404).json({
        success: false,
        error: 'Candidate profile not found'
      });
    }

    // Create resume
    const resumeFields = {
      candidate: candidate._id,
      ...req.body
    };

    const resume = await Resume.create(resumeFields);

    // If this is the default resume, update all other resumes to not be default
    if (resume.isDefault) {
      await Resume.updateMany(
        { candidate: candidate._id, _id: { $ne: resume._id } },
        { isDefault: false }
      );
    }

    res.status(201).json({
      success: true,
      data: resume
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get all resumes for a candidate
// @route   GET /api/candidates/resumes
// @access  Private
exports.getResumes = async (req, res) => {
  try {
    // Check if candidate profile exists
    const candidate = await Candidate.findOne({ user: req.user.id });
    if (!candidate) {
      return res.status(404).json({
        success: false,
        error: 'Candidate profile not found'
      });
    }

    const resumes = await Resume.find({ candidate: candidate._id });

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
