import { PlayingStrategy } from './PlayingStrategy';
import { HandType } from "./HandType";

export class Player {
    private strategy: PlayingStrategy;
    private hand: HandType=HandType.MOOK;
    constructor(strategy: PlayingStrategy) {
        this.strategy = strategy;
    }
    nextHand(curUserHand: HandType): HandType {
        this.hand = this.strategy.playerNextHand(curUserHand);
        return this.hand;
    }
}