import { Duck } from "./Duck";
import { FlyStrategy } from "./FlyStrategy";
import { QuackStrategy } from "./QuackStrategey";

export class WoodenDuck extends Duck {
    constructor(flyS: FlyStrategy, quackS: QuackStrategy) {
        super(flyS, quackS);
    }
    public display(): void {
        console.log('나무오리');
    }
}