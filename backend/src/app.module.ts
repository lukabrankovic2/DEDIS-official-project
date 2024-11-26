import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YourModule } from './your.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lukabrankovic2:ujqNwrGz5M0Pakr2@dedis.2p8s7.mongodb.net/?retryWrites=true&w=majority&appName=DEDIS'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
