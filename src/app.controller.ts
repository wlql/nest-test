import { Controller, Get, Param, Body, Query, Post } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/do/:method/:id')
  getHello1(@Param() params, @Body() body: any, @Query() query: any): string {
    console.log('*************************************');
    console.log(params);
    console.log(body);
    console.log(query);
    return this.appService.getHello();
  }

  @Post('/do/:method/:id')
  getHello(@Param() params, @Body() body: any, @Query() query: any): string {
    console.log('*************************************');
    console.log(params);
    console.log(body);
    console.log(query);
    return this.appService.getHello();
  }
}
