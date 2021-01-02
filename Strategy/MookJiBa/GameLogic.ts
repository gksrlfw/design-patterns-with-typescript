import { Player } from "./Player";
import { PlayingStrategy } from "./PlayingStrategy";
import { GameResult } from "./GameResult";
import { HandType } from "./HandType";


export class GameLogic {
    private computer: Player;
    private userHand: HandType = HandType.MOOK;

    constructor(strategy: PlayingStrategy) {
        this.computer = new Player(strategy);
    }

    playMookJiBa(): GameResult {
        let computerHand: HandType = this.computer.nextHand(this.userHand);
        if(this.userHand === computerHand) {
            // ...
        }
        // ...
        return GameResult.DRAW;
    }
}