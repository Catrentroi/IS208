/**
 * Error handling middleware
 * This will capture any unhandled errors and provide detailed error messages
 */

const errorHandler = (err, req, res, next) => {
  console.error('ERROR:', err);
  
  // Log the full error and stack trace in dev mode
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
  });
};

module.exports = errorHandler;
