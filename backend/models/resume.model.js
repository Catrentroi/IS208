const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a resume title'],
    trim: true
  },
  file: {
    url: {
      type: String,
      required: [true, 'Please provide a file URL']
    },
    filename: {
      type: String,
      required: [true, 'Please provide a filename']
    },
    fileType: {
      type: String,
      enum: ['pdf', 'doc', 'docx'],
      required: [true, 'Please provide a file type']
    }
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', resumeSchema);
