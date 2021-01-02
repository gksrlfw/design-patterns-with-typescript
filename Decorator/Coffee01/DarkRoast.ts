import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
    private static COST: number = 1200;

    constructor() {
        super();
        this.setDescription('다크로스트 커피');
    }
    cost(): number {
        return DarkRoast.COST;
    }
}