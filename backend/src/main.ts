import * as dotenv from 'dotenv';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { connectToDatabase } from './database/database';

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '..', '..', '.env') });

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined. Please check environment variables.');
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not defined. Please check environment variables.');
  process.exit(1);
}

async function bootstrap() {
  // Connect to the database before starting the application
  try {
    await connectToDatabase();
    console.log('Successfully connected to the database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit the process if the database connection fails
  }

  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Serve static files
  app.use(express.static(join(__dirname, '..', 'public')));
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // Set custom logger levels
  app.useLogger(['log', 'error', 'warn', 'debug']);

  await app.listen(3000);
}
bootstrap();
