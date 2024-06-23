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
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  userName: string;

  @IsEnum(UserAccountTypeEnum, {
    message: 'You need to provide a valid plataform!',
  })
  @ApiPropertyOptional({
    enum: UserAccountTypeEnum,
    enumName: 'AccountType',
    default: 'epic',
  })
  accountType: UserAccountTypeEnum;

  @IsEnum(UserTimeWindowEnum, {
    message: 'You need to provide a valid time window!',
  })
  @ApiPropertyOptional({
    enum: UserTimeWindowEnum,
    enumName: 'TimeWindow',
    default: 'lifetime',
  })
  timeWindow: UserTimeWindowEnum;

  @IsEnum(UserImageEnum, { message: 'You need to provide a valid image!' })
  @ApiPropertyOptional()
  @ApiPropertyOptional({
    enum: UserImageEnum,
    enumName: 'ImageEnum',
    default: 'none',
  })
  image: UserImageEnum;
}
