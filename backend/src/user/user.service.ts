import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string, password: string, email: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, password: hashedPassword, email });
    return newUser.save();
  }

  async validateUser(email: string, password: string): Promise<User> {
    this.logger.log('Validating user with email:', email);
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      this.logger.warn('User not found with email:', email);
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      this.logger.warn('Invalid password for email:', email);
      throw new UnauthorizedException('Invalid email or password');
    }

    this.logger.log('User validated successfully:', email);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
