import { PizzaStore } from "./PizzaStore";
import { ChicagoCheesePizza } from "./ChicagoCheesePizza";
import { ChicagoPotatoPizza } from "./ChicagoPotatoPizza";
import { Pizza } from "./Pizza";
import { PizzaType } from "./PizzaType";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(type: PizzaType): Pizza|null {
        let pizza: null|Pizza = null;
        switch(type) {
            case PizzaType.CHEESE: pizza = new ChicagoCheesePizza(); break;
            case PizzaType.POTATO: pizza = new ChicagoPotatoPizza(); break;
        }
        return pizza;
    }
}