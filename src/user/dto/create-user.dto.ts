export class CreateUserDto {
    userName!: string;
    accountType?: 'epic' | 'psn' | 'xbl';
    timeWindow?: 'season' | 'lifetime';
    image?: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
}
