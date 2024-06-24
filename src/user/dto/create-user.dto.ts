import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  accountId: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  userName: string;

  @ApiPropertyOptional({ enum: UserAccountTypeEnum, enumName: 'AccountType', default: 'epic' })
  accountType: UserAccountTypeEnum;

  @ApiPropertyOptional({ enum: UserTimeWindowEnum, enumName: 'TimeWindow', default: 'lifetime' })
  timeWindow: UserTimeWindowEnum;

  @ApiPropertyOptional({ enum: UserImageEnum, enumName: 'ImageEnum', default: 'none' })
  image: UserImageEnum;
}
