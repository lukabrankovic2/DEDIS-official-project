import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string, password: string, email: string): Promise<User> {
    const newUser = new this.userModel({ username, password, email });
    return newUser.save();
  }
}
