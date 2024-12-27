import { Controller, Post, Body, Req, UseGuards, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomRequest } from '../auth/custom-request.interface';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto, @Req() req: CustomRequest) {
    const userId = req.user.id;
    return this.commentService.create(createCommentDto, userId);
  }

  @Get('expedition/:id')
  async findByExpedition(@Param('id') expeditionId: string) {
    return this.commentService.findByExpedition(expeditionId);
  }
}