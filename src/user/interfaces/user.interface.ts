import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

export interface UserInterface {
  userName: string;
  accountType: UserAccountTypeEnum;
  timeWindow: UserTimeWindowEnum;
  image: UserImageEnum;
}
