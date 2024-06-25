import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatsInterface } from '../interfaces';
import { Account, BattlePass, StatsType } from '../types';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Stats implements StatsInterface {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column('json')
  battlePass: BattlePass;

  @Column({ default: null })
  image: string | null;

  @Column('json')
  stats: StatsType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => User, (user) => user.accountId)
  @JoinColumn({ name: 'id', referencedColumnName: 'accountId' })
  user: User;

  get account(): Account {
    return { id: this.id, name: this.name };
  }

  set account(account: Account) {
    this.id = account.id;
    this.name = account.name;
  }
}
