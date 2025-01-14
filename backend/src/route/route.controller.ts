import { Controller, Post, Body, Req, UseGuards, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomRequest } from '../auth/custom-request.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';
import { Multer } from 'multer';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

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
  async create(@Body() createRouteDto: CreateRouteDto, @Req() req: CustomRequest, @UploadedFile() file: Express.Multer.File) {
    const userId = req.user.id;
    createRouteDto.image = file.filename; // Save the filename in the DTO
    return this.routeService.create(createRouteDto, userId);
  }

  @Get()
  async findAll() {
    return this.routeService.findAll();
  }
}