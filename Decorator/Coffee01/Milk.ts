import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";


export class Milk extends CondimentDecorator {
    constructor(b: Beverage) {
        super(b);
    }

    getDescription(): string {
        return this.beverage.getDescription()+", 우유";
    }

    cost(): number {
        return this.beverage.cost()+500;
    }
}