import { Account, BattlePass, StatsType } from '../types';

export interface StatsInterface {
  account: Account;
  battlePass: BattlePass;
  image: string | null;
  stats: StatsType;
}
