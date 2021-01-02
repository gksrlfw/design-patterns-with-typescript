import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    private static COST: number = 1000;

    constructor() {
        super();
        this.setDescription('하우스 커피');
    }
    cost(): number {
        return HouseBlend.COST;
    }
}