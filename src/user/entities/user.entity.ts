import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { UserInterface } from '../interfaces';
import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';
import { Stats } from 'src/stats/entities/stats.entity';

@Entity()
@Unique(['accountId'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountId: string;

  @Column()
  userName: string;

  @Column({ default: 'epic' })
  accountType: UserAccountTypeEnum;

  @Column({ default: 'lifetime' })
  timeWindow: UserTimeWindowEnum;

  @Column({ default: 'none' })
  image: UserImageEnum;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne((type) => Stats, (stats) => stats.user)
  stats: Stats;
}
