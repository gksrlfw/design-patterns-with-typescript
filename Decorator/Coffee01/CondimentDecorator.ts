import { lstat } from "fs";
import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    protected beverage: Beverage;
    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }
    abstract getDescription(): string;
    removeCondiment(): Beverage {
        return this.beverage;
    }
}