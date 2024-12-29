import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '..', '.env') });
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined. Please check environment variables.');
  process.exit(1);
}

// test

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { connectToDatabase } from './database/database';

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

  // Serve static files
  app.use(express.static(join(__dirname, '..', 'public')));

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins (not recommended for production)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set custom logger levels
  app.useLogger(['log', 'error', 'warn', 'debug']);

  await app.listen(3000);
}
bootstrap();
