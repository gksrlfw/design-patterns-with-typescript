import { Duck } from "./Duck";
import { FlyStrategy } from "./FlyStrategy";
import { QuackStrategy } from "./QuackStrategey";

export class RubberDuck extends Duck {
    constructor(flyS: FlyStrategy, quackS: QuackStrategy) {
        super(flyS, quackS);
    }
    public display(): void {
        console.log('고무오리');
    }
}