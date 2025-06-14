const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: String,
    required: [true, 'Please provide a company name'],
    trim: true
  },
  position: {
    type: String,
    trim: true
  },
  companyDescription: {
    type: String,
    trim: true
  },
  companyWebsite: {
    type: String,
    trim: true
  },
  companyLogo: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
