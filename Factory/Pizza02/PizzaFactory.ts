import { CheesePizza } from "../Pizza01/CheesePizza";
import { Pizza } from "../Pizza01/Pizza";
import { PizzaType } from "../Pizza01/PizzaType";
import { PotatoPizza } from "../Pizza01/PotatoPizza";

export class PizzaFactory {
    createPizza(type: PizzaType): Pizza|null {
        switch(type) {
            case PizzaType.CHEESE: return new CheesePizza(); break;
            case PizzaType.POTATO: return new PotatoPizza(); break;
        }
        return null;
    }
}