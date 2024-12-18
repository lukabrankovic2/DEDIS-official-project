import * as mongoose from 'mongoose';

const globalAny: any = global;

export const connectToDatabase = async () => {
  if (globalAny.mongoose) {
    console.log('Using existing MongoDB connection');
    return globalAny.mongoose;
  } else {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      console.error('MONGODB_URI is not defined. Please check environment variables.');
      throw new Error('MONGODB_URI is missing');
    }
    try {
      console.log('Attempting to connect to MongoDB...');
      globalAny.mongoose = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 5000, // Set a timeout to detect issues quickly
      });
      console.log('Connected to MongoDB successfully.');
      return globalAny.mongoose;
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      throw error; // Rethrow the error to ensure it stops execution
    }
  }
};
