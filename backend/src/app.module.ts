import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ExpeditionModule } from './expedition/expedition.module';
import { CommentModule } from './comments/comment.module';
import { RouteModule } from './route/route.module';
import { AuthGuard } from './auth/auth.guard';
import { LikesModule } from './likes/likes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    ExpeditionModule,
    CommentModule,
    RouteModule,
    LikesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
