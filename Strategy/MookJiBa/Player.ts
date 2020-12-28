import { PlayingStrategy } from './PlayingStrategy';
export class Player {
    private strategy: PlayingStrategy;
    constructor(strategy: PlayingStrategy) {
        this.strategy = strategy;
    }
}