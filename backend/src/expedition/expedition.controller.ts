import { Controller, Post, Body, Req, UseGuards, Get, Param } from '@nestjs/common';
import { ExpeditionService } from './expedition.service';
import { CreateExpeditionDto } from './dto/create-expedition.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomRequest } from '../auth/custom-request.interface';

@Controller('expeditions')
export class ExpeditionController {
  constructor(private readonly expeditionService: ExpeditionService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() createExpeditionDto: CreateExpeditionDto, @Req() req: CustomRequest) {
    const userId = req.user.id;
    return this.expeditionService.create(createExpeditionDto, userId);
  }

  @Get()
  async findAll() {
    return this.expeditionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.expeditionService.findOne(id);
  }
}