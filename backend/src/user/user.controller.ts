import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    return this.userService.createUser(username, password, email);
  }
}
