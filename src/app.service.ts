import { Injectable } from '@nestjs/common';
import { Example } from './entities/Example.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
  ) {}
  getHello(): string {
    return process.env.NAME || 'Hello K8s!';
  }

  async getDb(): Promise<any> {
    try {
      return await this.exampleRepository.find();
    } catch (error) {
      return error;
    }
  }

  async create(): Promise<any> {
    try {
      return await this.exampleRepository.save({ name: 'test', list: [3, 4] });
    } catch (error) {
      return error;
    }
  }
}
