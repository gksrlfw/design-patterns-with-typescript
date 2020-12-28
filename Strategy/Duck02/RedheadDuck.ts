import { Duck } from "../Duck02/Duck";
import { FlyingDuck } from "./FlyingDuck";

export class RedheadDuck extends Duck implements FlyingDuck {
    fly(): void {
        console.log('빨간머리오리, 날아');
        
    }
    public display(): void {
        console.log('빨간머리오리');
        
    }

}