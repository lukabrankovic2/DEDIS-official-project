import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto, userId: string): Promise<Comment> {
    const createdComment = new this.commentModel({
      content: createCommentDto.content,
      user: userId,
      expedition: createCommentDto.expeditionId,
    });
    return createdComment.save();
  }

  async findByExpedition(expeditionId: string): Promise<Comment[]> {
    return this.commentModel.find({ expedition: expeditionId }).populate('user').exec();
  }
}