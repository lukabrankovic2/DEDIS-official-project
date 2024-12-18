import * as mongoose from 'mongoose';

const globalAny: any = global;

export const connectToDatabase = async () => {
  if (globalAny.mongoose) {
    console.log('Using existing MongoDB connection');
    return globalAny.mongoose;
  } else {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    try {
      globalAny.mongoose = await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB');
      return globalAny.mongoose;
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      throw error;
    }
  }
};
