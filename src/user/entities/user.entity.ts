import { UserInterface } from "../interfaces";

export class User implements UserInterface{
    id: string;
    userName: string;
    accountType?: "epic" | "psn" | "xbl";
    timeWindow?: "season" | "lifetime";
    image?: "all" | "keyboardMouse" | "gamepad" | "touch" | "none";
}
