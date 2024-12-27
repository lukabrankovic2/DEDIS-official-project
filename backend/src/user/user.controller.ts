import { Body, Controller, Post, UnauthorizedException, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    return this.userService.createUser(username, password, email);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    this.logger.log('Received login request with email:', email);

    try {
      const user = await this.userService.validateUser(email, password);
      const payload = { username: user.username, sub: user._id };
      const token = this.jwtService.sign(payload);
      this.logger.log('Login successful for email:', email);
      return {
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        token,
      };
    } catch (error) {
      this.logger.error('Login failed for email:', email, error.message);
      throw new UnauthorizedException('Invalid email or password');
    }
  }
}
