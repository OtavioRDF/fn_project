import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserInterface } from '../interfaces';
import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

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
}
