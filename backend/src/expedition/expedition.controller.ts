import { Controller, Post, Body, Req, UseGuards, Get, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExpeditionService } from './expedition.service';
import { CreateExpeditionDto } from './dto/create-expedition.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomRequest } from '../auth/custom-request.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('expeditions')
export class ExpeditionController {
  constructor(private readonly expeditionService: ExpeditionService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      }
    })
  }))
  async create(@Body() createExpeditionDto: CreateExpeditionDto, @Req() req: CustomRequest, @UploadedFile() file: Express.Multer.File) {
    const userId = req.user.id;
    createExpeditionDto.image = file.filename; // Save the filename in the DTO
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