import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserInterface } from '../interfaces';

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column({ default: 'epic' })
  accountType: 'epic' | 'psn' | 'xbl';

  @Column({ default: 'lifetime' })
  timeWindow: 'season' | 'lifetime';

  @Column({ default: 'none' })
  image: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
