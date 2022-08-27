import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('🚀 process.env.name', process.env.name);
    return process.env.NAME || 'Hello K8s!';
  }
}
