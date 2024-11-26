import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body('username') username: string) {
    console.log('Received Username:', username); // Debug log
    return this.userService.createUser(username);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
