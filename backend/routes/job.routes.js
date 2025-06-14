const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
} = require('../controllers/job.controller');

// Public routes
router.route('/').get(getJobs);
router.route('/:id').get(getJob);

// Protected routes
router.use(protect);

// Recruiter or Admin only routes
router.route('/')
  .post(authorize('recruiter', 'admin'), createJob);

router.route('/:id')
  .put(authorize('recruiter', 'admin'), updateJob)
  .delete(authorize('recruiter', 'admin'), deleteJob);

module.exports = router;
