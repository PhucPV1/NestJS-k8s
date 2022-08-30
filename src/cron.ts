import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from './entities/Example.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
  ) {}
  private readonly logger = new Logger(TasksService.name);

  @Cron('00 30 16 * * *', {
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  handleCron() {
    this.logger.debug('Called when the current second is 45');
    this.exampleRepository.save({ name: 'cronTest', list: [6, 8] });
  }
}
