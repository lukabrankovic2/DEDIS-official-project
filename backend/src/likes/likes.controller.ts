import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('like/:id')
  async likeExpedition(@Param('id') id: string, @Body('userId') userId: string) {
    return this.likesService.likeExpedition(id, userId);
  }

  @Get('count/:id')
  async countLikes(@Param('id') id: string) {
    return this.likesService.countLikes(id);
  }
}