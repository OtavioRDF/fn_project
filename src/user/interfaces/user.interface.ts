export interface UserInterface {
  userName: string;
  accountType?: 'epic' | 'psn' | 'xbl';
  timeWindow?: 'season' | 'lifetime';
  image?: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
}
