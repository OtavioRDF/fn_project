import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Stats } from './entities/stats.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CreateStatDto } from './dto/create-stats.dto';
import { User } from 'src/user/entities/user.entity';
import { UserImageEnum } from 'src/user/enums';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  saveStats(userStats: CreateStatDto) {
    const stats = new Stats();

    stats.account = userStats.account;
    stats.battlePass = userStats.battlePass;
    stats.image = userStats.image;
    stats.stats = userStats.stats;

    this.statsRepository.save(stats);
  }

  applyFilters(data, filter: string, image: UserImageEnum) {
    let filteredData = data;

    if (image) {
      const filteredStats = Object.fromEntries(
        Object.entries(data.stats).filter(([key]) => key === image),
      );

      filteredData = {
        ...data,
        stats: {
          all: filteredStats,
        },
      };
    }

    if (filter) {
      const filteredStatsByStatus = Object.fromEntries(
        Object.entries(filteredData.stats.all).map(([key, value]) => {
          return [key, { [filter]: value[filter] }];
        }),
      );

      filteredData = {
        ...filteredData,
        stats: {
          all: filteredStatsByStatus,
        },
      };
    }

    return filteredData;
  }

  async findOne(user: User, filter: string, image: UserImageEnum) {
    const {
      data: { data },
    } = await this.httpService.axiosRef.get<{ status: number; data: Stats }>(
      `${user.accountId}?accountType=${user.accountType}&timeWindow=${user.timeWindow}&image=${user.image}`,
    );

    this.saveStats(data);

    if (!filter && !image) {
      return data;
    }

    return this.applyFilters(data, filter, image);
  }
}
