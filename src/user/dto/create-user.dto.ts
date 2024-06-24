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

  @ApiPropertyOptional({ enum: UserAccountTypeEnum, enumName: 'AccountType' })
  @IsEnum(UserAccountTypeEnum, {
    message: 'You need to provide a valid plataform!',
  })
  accountType: UserAccountTypeEnum;

  @ApiPropertyOptional({ enum: UserTimeWindowEnum, enumName: 'TimeWindow' })
  @IsEnum(UserTimeWindowEnum, {
    message: 'You need to provide a valid time window!',
  })
  timeWindow: UserTimeWindowEnum;

  @ApiPropertyOptional({ enum: UserImageEnum, enumName: 'ImageEnum' })
  @IsEnum(UserImageEnum, { message: 'You need to provide a valid image!' })
  image: UserImageEnum;
}
