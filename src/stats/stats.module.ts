import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { HttpModule } from '@nestjs/axios';
import { Stats } from './entities/stats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stats]),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('API_URL'),
        headers: { 'Authorization': configService.get<string>('AUTH')}
      }),
      inject: [ConfigService],
    })
  ],
  providers: [StatsService],
  exports: [StatsService],
})
export class StatsModule {}
