import { CheesePizza } from "./CheesePizza";
import { Pizza } from "./Pizza";
import { PizzaFactory } from "./PizzaFactory";
import { PizzaType } from "./PizzaType";
import { PotatoPizza } from "./PotatoPizza";


export class PizzaStore {
    private pf: PizzaFactory|null = null;
    setPizzaFactory(pf: PizzaFactory): void {
        this.pf = pf;
    }
    orderPizza(type: PizzaType): void {
        // let pizza: Pizza|null;
        if(this.pf !== null && this.pf.createPizza(type) !== null) {
            this.pf.createPizza(type)?.prepare();
            this.pf.createPizza(type)?.bake();
            this.pf.createPizza(type)?.cut();
            this.pf.createPizza(type)?.box();
        }
    }
}