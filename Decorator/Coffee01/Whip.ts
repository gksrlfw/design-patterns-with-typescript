import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";


export class Whip extends CondimentDecorator {
    constructor(b: Beverage) {
        super(b);
    }

    getDescription(): string {
        return this.beverage.getDescription()+", 크림";
    }

    cost(): number {
        return this.beverage.cost()+500;
    }
}