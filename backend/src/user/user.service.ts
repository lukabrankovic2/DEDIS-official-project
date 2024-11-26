import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(username: string): Promise<User> {
    console.log('Creating User:', username); // Debug log
    const newUser = new this.userModel({ username });
    const savedUser = await newUser.save(); // Save the document
    console.log('Saved User:', savedUser); // Debug log
    return savedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec(); // Fetch all users
  }
}
