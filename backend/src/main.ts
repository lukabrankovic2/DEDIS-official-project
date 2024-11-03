import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  );
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

  // Initialize the app (serverless compatibility)
  await app.init();
}

bootstrap();

// Export the server for Vercel to use
export default server;
