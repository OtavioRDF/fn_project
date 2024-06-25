import { ApiProperty } from '@nestjs/swagger';
import { Account, BattlePass, StatsType } from '../types';

export class CreateStatDto {
  @ApiProperty()
  account: Account;

  @ApiProperty()
  battlePass: BattlePass;

  @ApiProperty()
  image: string | null;

  @ApiProperty()
  stats: StatsType;
}
