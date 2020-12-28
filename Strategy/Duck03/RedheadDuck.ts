import { Duck } from "./Duck";
import { FlyStrategy } from "./FlyStrategy";
import { QuackStrategy } from "./QuackStrategey";

export class RedheadDuck extends Duck {
    constructor(flyS: FlyStrategy, quackS: QuackStrategy) {
        super(flyS, quackS);
    }
    public display(): void {
        console.log('빨간머리오리');
    }
}