import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('db')
  async getDb(): Promise<any> {
    return this.appService.getDb();
  }

  @Get('create')
  async getDb2(): Promise<any> {
    return this.appService.create();
  }
}
