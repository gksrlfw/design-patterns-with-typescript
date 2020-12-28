export interface PlayingStrategy {
    playerNextHand(userHand: string): string;
}