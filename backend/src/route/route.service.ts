import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Route } from './schemas/route.schema';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RouteService {
  constructor(@InjectModel(Route.name) private routeModel: Model<Route>) {}

  async create(createRouteDto: CreateRouteDto, userId: string): Promise<Route> {
    const createdRoute = new this.routeModel({ ...createRouteDto, user: userId });
    return createdRoute.save();
  }

  async findAll(): Promise<Route[]> {
    return this.routeModel.find().populate('user').exec();
  }
}