import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  userName: string;

  @ApiPropertyOptional({
    enum: UserAccountTypeEnum,
    enumName: 'AccountType',
    default: 'epic',
  })
  @IsEnum(UserAccountTypeEnum, {
    message: 'You need to provide a valid plataform!',
  })
  accountType: UserAccountTypeEnum;

  @ApiPropertyOptional({
    enum: UserTimeWindowEnum,
    enumName: 'TimeWindow',
    default: 'lifetime',
  })
  @IsEnum(UserTimeWindowEnum, {
    message: 'You need to provide a valid time window!',
  })
  timeWindow: UserTimeWindowEnum;

  @ApiPropertyOptional({
    enum: UserImageEnum,
    enumName: 'ImageEnum',
    default: 'none',
  })
  @IsEnum(UserImageEnum, { message: 'You need to provide a valid image!' })
  image: UserImageEnum;
}
