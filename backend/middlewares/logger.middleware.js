/**
 * Request logger middleware
 * This will log the details of each request for better debugging
 */

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  
  // Log request body if it exists and isn't a file upload
  if (req.body && Object.keys(req.body).length > 0 && !req.is('multipart/form-data')) {
    console.log('Request Body:', JSON.stringify(req.body, null, 2));
  }
  
  next();
};

module.exports = logger;
