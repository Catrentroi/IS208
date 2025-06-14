const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
  getInterviews,
  getInterview,
  scheduleInterview,
  updateInterview,
  addInterviewFeedback
} = require('../controllers/interview.controller');

// All routes are protected
router.use(protect);

router.route('/')
  .get(getInterviews)
  .post(authorize('recruiter', 'admin'), scheduleInterview);

router.route('/:id')
  .get(getInterview)
  .put(authorize('recruiter', 'admin'), updateInterview);

router.route('/:id/feedback')
  .put(authorize('recruiter', 'admin'), addInterviewFeedback);

module.exports = router;
