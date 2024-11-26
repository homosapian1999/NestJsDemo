import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get')
  getAPIResponse(): string {
    return this.appService.getAPIResponse();
  }

  @Post('post')
  getPostResponse():string{
    return this.appService.postAPIResponse();
  }
}
