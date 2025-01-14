import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CustomRequest } from '../auth/custom-request.interface';

@Controller('expeditions')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':id/like')
  async likeExpedition(@Param('id') expeditionId: string, @Body('userId') userId: string) {
    return this.likesService.likeExpedition(userId, expeditionId);
  }

  @Get(':id/likes')
  async getLikeCount(@Param('id') expeditionId: string) {
    const count = await this.likesService.countLikes(expeditionId);
    return { count };
  }
}