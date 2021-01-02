
import { HandType } from "./HandType";
export interface PlayingStrategy {
    playerNextHand(userHand: HandType): HandType;
}