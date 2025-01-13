import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './schemas/like.schema';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like.name) private likeModel: Model<Like>) {}

  async likeExpedition(userId: string, expeditionId: string): Promise<Like> {
    const existingLike = await this.likeModel.findOne({ user: userId, expedition: expeditionId }).exec();
    if (existingLike) {
      return existingLike;
    }
    const newLike = new this.likeModel({ user: userId, expedition: expeditionId });
    return newLike.save();
  }

  async countLikes(expeditionId: string): Promise<number> {
    return this.likeModel.countDocuments({ expedition: expeditionId }).exec();
  }
}