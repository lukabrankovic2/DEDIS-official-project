import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Expedition, ExpeditionSchema } from './schemas/expedition.schema';
import { ExpeditionService } from './expedition.service';
import { ExpeditionController } from './expedition.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LikesModule } from '../likes/likes.module'; // Import LikesModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Expedition.name, schema: ExpeditionSchema }]),
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    LikesModule, // Add LikesModule to imports
  ],
  controllers: [ExpeditionController],
  providers: [ExpeditionService],
})
export class ExpeditionModule {}