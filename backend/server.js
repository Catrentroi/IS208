const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Import config
const db = require('./config/db.config');
const { PORT } = require('./config/env');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./middlewares/logger.middleware'));

// Database connection
db.connect();

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/candidates', require('./routes/candidate.routes'));
app.use('/api/jobs', require('./routes/job.routes'));
app.use('/api/applications', require('./routes/application.routes'));
app.use('/api/interviews', require('./routes/interview.routes'));

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working correctly',
    timestamp: new Date().toISOString()
  });
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Job Application System API' });
});

// Global error handler - must be after all routes
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
