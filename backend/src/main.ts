import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static(join(__dirname, '..', 'public')));
  app.useLogger(['log', 'error', 'warn', 'debug']);
  await app.listen(3000);
}
bootstrap();
