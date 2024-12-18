import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
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
    origin: [
      'https://dedis-official-project-85zt1ufai-lukabrankovic2s-projects.vercel.app',
      'http://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set custom logger levels
  app.useLogger(['log', 'error', 'warn', 'debug']);

  await app.listen(3000);
}
bootstrap();
