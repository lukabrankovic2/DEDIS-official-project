import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YourModule } from './your.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    YourModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
