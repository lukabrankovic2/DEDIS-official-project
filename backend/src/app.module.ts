import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ExpeditionModule } from './expedition/expedition.module';
import { CommentModule } from './comments/comment.module';
import { AuthGuard } from './auth/auth.guard';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available globally
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    ExpeditionModule,
    CommentModule,
  ],
  providers: [AuthGuard],
})
export class AppModule {}
