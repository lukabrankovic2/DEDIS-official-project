// filepath: /home/lukabrankovic/DEDIS-official/backend/src/likes/likes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Expedition, ExpeditionSchema } from '../expedition/schemas/expedition.schema';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Expedition.name, schema: ExpeditionSchema }]),
  ],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}