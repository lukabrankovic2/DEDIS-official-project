import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
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
