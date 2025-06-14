const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

const connect = async () => {
  try {
    // Use the connection string from environment or fallback to the Atlas URL
    const connectionString = MONGODB_URI || 'mongodb+srv://cluster0.j2usc.mongodb.net/QLDA_ISS208';
    console.log('Connecting to MongoDB with: ', connectionString);
    
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = {
  connect
};
