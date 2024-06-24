import {
  UserAccountTypeEnum,
  UserImageEnum,
  UserTimeWindowEnum,
} from '../enums';

export interface UserInterface {
  accountId: string;
  userName: string;
  accountType: UserAccountTypeEnum;
  timeWindow: UserTimeWindowEnum;
  image: UserImageEnum;
}
