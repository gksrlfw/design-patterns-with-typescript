import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";


export class Mocha extends CondimentDecorator {
    constructor(b: Beverage) {
        super(b);
    }

    getDescription(): string {
        return this.beverage.getDescription()+", 모카";
    }

    cost(): number {
        return this.beverage.cost()+200;
    }
}