const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
  getApplications,
  getApplication,
  createApplication,
  updateApplicationStatus
} = require('../controllers/application.controller');

// All routes are protected
router.use(protect);

router.route('/')
  .get(getApplications)
  .post(authorize('candidate'), createApplication);

router.route('/:id')
  .get(getApplication)
  .put(authorize('recruiter', 'admin'), updateApplicationStatus);

module.exports = router;
