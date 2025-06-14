const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    required: true
  },
  interviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  scheduledAt: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes
    default: 60
  },
  location: {
    type: String,
    enum: ['In-person', 'Phone', 'Video'],
    required: true
  },
  locationDetails: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled', 'Rescheduled'],
    default: 'Scheduled'
  },
  feedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    strengths: [String],
    weaknesses: [String],
    notes: String,
    recommendation: {
      type: String,
      enum: ['Proceed', 'Reject', 'Another Interview']
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Interview', interviewSchema);
