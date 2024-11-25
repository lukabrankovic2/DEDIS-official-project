import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  getNews(): string {
    return 'Welcome to the News Page';
  }
}
