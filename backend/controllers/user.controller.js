const User = require('../models/user.model');
const Candidate = require('../models/candidate.model');
const Recruiter = require('../models/recruiter.model');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Check if requesting user has access
    if (req.user.id !== user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to access this user'
      });
    }

    let userDetails;

    if (user.role === 'candidate') {
      userDetails = await Candidate.findOne({ user: user._id });
    } else if (user.role === 'recruiter') {
      userDetails = await Recruiter.findOne({ user: user._id });
    }

    res.status(200).json({
      success: true,
      data: {
        user,
        profile: userDetails || {}
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Check if requesting user has access
    if (req.user.id !== user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this user'
      });
    }

    // Don't update password here
    const { password, role, ...otherFields } = req.body;

    // Update user
    const updatedUser = await User.findByIdAndUpdate(req.params.id, otherFields, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Only admin or the user themselves can delete
    if (req.user.id !== user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this user'
      });
    }

    // Remove associated profile
    if (user.role === 'candidate') {
      await Candidate.findOneAndDelete({ user: user._id });
    } else if (user.role === 'recruiter') {
      await Recruiter.findOneAndDelete({ user: user._id });
    }

    // Remove user
    await user.deleteOne();

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
