import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomRequest } from './custom-request.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const authorizationHeader = request.headers['authorization'];
    this.logger.log(`Authorization header: ${authorizationHeader}`);

    if (!authorizationHeader) {
      this.logger.error('No authorization header');
      return false;
    }

    const [type, token] = authorizationHeader.split(' ');
    this.logger.log(`Bearer ${token}`);

    if (type !== 'Bearer' || !token) {
      this.logger.error('Invalid authorization header format');
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);
      this.logger.log(`Validating token: ${token}`);
      request.user = { id: decoded.sub, username: decoded.username, email: decoded.email };
      return true;
    } catch (error) {
      this.logger.error('Invalid token', error.message);
      return false;
    }
  }
}