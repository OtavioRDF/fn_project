import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Stats } from './entities/stats.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CreateStatDto } from './dto/create-stats.dto';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ){}
  
  saveStats(userStats: CreateStatDto){
    const stats = new Stats();

    stats.account = userStats.account;
    stats.battlePass = userStats.battlePass;
    stats.image = userStats.image;
    stats.stats = userStats.stats;

    this.statsRepository.save(stats);
  }

  async findOne(id: string, queue: string): Promise<Stats> {
    const { data : { data } } = await this.httpService.axiosRef.get<{status: number, data: Stats}>(id);
      
    this.saveStats(data);

    if(!queue) {
      return data;
    }
    
  }
}
