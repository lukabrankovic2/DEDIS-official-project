import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Expedition } from './schemas/expedition.schema';
import { CreateExpeditionDto } from './dto/create-expedition.dto';

@Injectable()
export class ExpeditionService {
  constructor(@InjectModel(Expedition.name) private expeditionModel: Model<Expedition>) {}

  async create(createExpeditionDto: CreateExpeditionDto, userId: string): Promise<Expedition> {
    const createdExpedition = new this.expeditionModel({
      ...createExpeditionDto,
      user: new Types.ObjectId(userId),
    });
    return createdExpedition.save();
  }

  async findAll(): Promise<Expedition[]> {
    return this.expeditionModel.find().populate('user').exec();
  }

  async findOne(id: string): Promise<Expedition> {
    return this.expeditionModel.findById(id).populate('user').exec();
  }
}