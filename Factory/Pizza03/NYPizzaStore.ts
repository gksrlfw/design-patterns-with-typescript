import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./PizzaType";
import { NYCheesePizza } from "./NYCheesePizza";
import { NYPotatoPizza } from "./NYPotatoPizza";
import { Pizza } from "./Pizza";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(type: PizzaType): Pizza|null {
        let pizza: Pizza|null = null;
        switch(type) {
            case PizzaType.CHEESE: pizza = new NYCheesePizza(); break;
            case PizzaType.POTATO: pizza = new NYPotatoPizza(); break;
        }
        return pizza;
    }
}