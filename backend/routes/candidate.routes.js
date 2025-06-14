const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
  getCandidate,
  updateCandidateProfile,
  addResume,
  getResumes
} = require('../controllers/candidate.controller');

// Get candidate by ID (public)
router.route('/:id').get(getCandidate);

// Protected routes
router.use(protect);

// Candidate profile update (candidate only)
router.route('/')
  .put(authorize('candidate'), updateCandidateProfile)
  .post(authorize('candidate'), updateCandidateProfile);

// Resume routes (candidate only)
router.route('/resumes')
  .get(authorize('candidate'), getResumes)
  .post(authorize('candidate'), addResume);

// Also support singular /resume endpoint for better API usability
router.route('/resume')
  .get(authorize('candidate'), getResumes)
  .post(authorize('candidate'), addResume);

module.exports = router;
