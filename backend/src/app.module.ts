import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YourModule } from './your.module';
import { HomeController } from './home.controller';
import { NewsController } from './news.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    YourModule,
  ],
  controllers: [AppController, HomeController, NewsController],
  providers: [AppService],
})
export class AppModule {}
