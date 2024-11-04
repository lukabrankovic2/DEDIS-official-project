import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'), // Adjusted path to point to the public folder
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes environment variables available throughout the app
      envFilePath: '../.env',
    }),
    DatabaseModule,
  ],
  controllers: [AppController], // Register the default AppController
  providers: [AppService], // Register the default AppService
})
export class AppModule {}
