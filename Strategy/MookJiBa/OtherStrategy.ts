import { PlayingStrategy } from "./PlayingStrategy";
import { GameResult } from "./GameResult";
import { HandType } from "./HandType";
export class OtherStrategy implements PlayingStrategy {
    playerNextHand(userHand: HandType): HandType {
        
        // Logic for other strategy 

        return HandType.BA;
    }
}