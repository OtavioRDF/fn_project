import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty()
  userName: string;

  @IsEnum(UserAccountTypeEnum, {
    message: 'You need to provide a valid plataform!',
  })
  @ApiPropertyOptional({ enum: UserAccountTypeEnum, enumName: 'AccountType' })
  accountType: UserAccountTypeEnum;

  @IsEnum(UserTimeWindowEnum, {
    message: 'You need to provide a valid time window!',
  })
  @ApiPropertyOptional({ enum: UserTimeWindowEnum, enumName: 'TimeWindow' })
  timeWindow: UserTimeWindowEnum;

  @IsEnum(UserImageEnum, { message: 'You need to provide a valid image!' })
  @ApiPropertyOptional({ enum: UserImageEnum, enumName: 'ImageEnum' })
  image: UserImageEnum;
}
