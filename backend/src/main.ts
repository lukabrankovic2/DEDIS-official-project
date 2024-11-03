import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  console.log('Connected to database:', configService.get('MONGODB_URI'));

  // Enable CORS
  app.enableCors();

  // Serve static files from the public directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Middleware for logging requests
  app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

  // Catch-all route for client-side routing
  app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  // Initialize and listen for serverless compatibility
  await app.init();
}

bootstrap();
