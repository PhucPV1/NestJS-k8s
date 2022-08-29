import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './entities/Example.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      username: 'postgres',
      password: '123456',
      database: 'test',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Example]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
