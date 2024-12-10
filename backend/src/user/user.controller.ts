import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    return this.userService.createUser(username, password, email);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    try {
      const user = await this.userService.validateUser(email, password);
      return {
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid email or password');
    }
  }
}
