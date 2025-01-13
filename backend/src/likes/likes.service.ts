// filepath: /home/lukabrankovic/DEDIS-official/backend/src/likes/likes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Expedition } from '../expedition/schemas/expedition.schema';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Expedition.name) private expeditionModel: Model<Expedition>) {}

  async likeExpedition(expeditionId: string, userId: string): Promise<Expedition> {
    const expedition = await this.expeditionModel.findById(expeditionId);
    if (!expedition) {
      throw new NotFoundException('Expedition not found');
    }

    if (!expedition.likes.includes(userId)) {
      expedition.likes.push(userId);
      await expedition.save();
    }

    return expedition;
  }

  async unlikeExpedition(expeditionId: string, userId: string): Promise<Expedition> {
    const expedition = await this.expeditionModel.findById(expeditionId);
    if (!expedition) {
      throw new NotFoundException('Expedition not found');
    }

    const index = expedition.likes.indexOf(userId);
    if (index > -1) {
      expedition.likes.splice(index, 1);
      await expedition.save();
    }

    return expedition;
  }

  async countLikes(expeditionId: string): Promise<number> {
    const expedition = await this.expeditionModel.findById(expeditionId);
    if (!expedition) {
      throw new NotFoundException('Expedition not found');
    }

    return expedition.likes.length;
  }
}