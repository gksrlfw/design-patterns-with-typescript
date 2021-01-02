import { PlayingStrategy } from "./PlayingStrategy";
import { HandType } from "./HandType";

export class RandomStrategy implements PlayingStrategy {
    playerNextHand(userHand: HandType): HandType {
        let random = Math.floor(Math.random() * 3);
        // return HandType[random];  ??

        if(random===0) return HandType.MOOK;
        if(random===1) return HandType.JI;
        return HandType.BA;
    }
}