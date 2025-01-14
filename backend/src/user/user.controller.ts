import { Controller, Get, Post, Patch, Body, Param, UnauthorizedException, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Post('signup')
  async signup(@Body() body: { username: string; password: string; email: string }) {
    const { username, password, email } = body;
    const role = username === 'admin' ? 'admin' : 'rookie hiker';
    return this.userService.createUser(username, password, email, role);
  }

  @Patch(':id/role')
  async updateUserRole(@Param('id') id: string, @Body('role') role: string) {
    return this.userService.updateUserRole(id, role);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    this.logger.log('Received login request with email:', email);

    try {
      const user = await this.userService.validateUser(email, password);
      const payload = { username: user.username, sub: user._id, role: user.role };
      const token = this.jwtService.sign(payload);
      this.logger.log('Login successful for email:', email);
      return {
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        token,
      };
    } catch (error) {
      this.logger.error('Login failed for email:', email, error.message);
      throw new UnauthorizedException('Invalid email or password');
    }
  }
}
