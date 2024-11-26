import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YourModule } from './your.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
