import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes environment variables available throughout the app
    }),
    DatabaseModule,
  ],
  controllers: [AppController], // Register the default AppController
  providers: [AppService], // Register the default AppService
})
export class AppModule {}
