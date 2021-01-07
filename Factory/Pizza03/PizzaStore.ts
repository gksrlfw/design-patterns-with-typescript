import { Pizza } from "./Pizza";
import { PizzaType } from "./PizzaType";


export abstract class PizzaStore {
    orderPizza(type: PizzaType): Pizza|null {
        let pizza: Pizza|null = this.createPizza(type);
        if(pizza !== null) {
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        }
        return null;
    }

    protected abstract createPizza(type: PizzaType): Pizza|null;
}