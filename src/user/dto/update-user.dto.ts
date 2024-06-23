import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @MinLength(4)
    userName: string;

    @IsOptional()
    @IsEnum(['epic', 'psn', 'xbl'], { message: 'You need to provide a valid plataform!'})
    accountType: 'epic' | 'psn' | 'xbl';

    @IsOptional()
    @IsEnum(['season', 'lifetime'], { message: 'You need to provide a valid time window!'})
    timeWindow: 'season' | 'lifetime';

    @IsOptional()
    @IsEnum(['all', 'keyboardMouse', 'gamepad', 'touch', 'none'], { message: 'You need to provide a valid image!'})
    image: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
}
