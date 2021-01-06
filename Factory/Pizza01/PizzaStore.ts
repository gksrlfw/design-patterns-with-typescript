import { CheesePizza } from "./CheesePizza";
import { Pizza } from "./Pizza";
import { PizzaType } from "./PizzaType";
import { PotatoPizza } from "./PotatoPizza";


export class PizzaStore {
    orderPizza(type: PizzaType): Pizza {
        let pizza: Pizza|null = null;
        // 다양한 종류의 피자가 추가될 수 있음
        switch(type) {
            case PizzaType.CHEESE: pizza = new CheesePizza(); break;
            case PizzaType.POTATO: pizza = new PotatoPizza(); break;
        }
        pizza.prepare(); 
		pizza.bake(); 
		pizza.cut();
		pizza.box();
		return pizza; 
    }
}