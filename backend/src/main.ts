import * as dotenv from 'dotenv';
dotenv.config();
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

   // Add CSP header middleware
  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live;"
    );
    next();
  });

  // Serve static files from the public directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Catch-all route to serve index.html for client-side routing
  app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

  await app.init(); // Use init() instead of listen() for serverless compatibility
  await app.listen(3000, '0.0.0.0');
}

bootstrap();

// Export the server to be used by Vercel
export default server;
