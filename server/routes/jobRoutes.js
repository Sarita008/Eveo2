const express = require('express');
const router = express.Router();
const jobController = require('../controller/JobController');

// Routes for jobs
router.get('/', jobController.getAllJobs); // Get all jobs
router.get('/:id', jobController.getJobById); // Get job by ID
router.post('/:id/apply', jobController.applyForJob); // Apply for a job
router.post('/jobs', jobController.createJob);  // Add a new job (optional, for admin use)

module.exports = router;


