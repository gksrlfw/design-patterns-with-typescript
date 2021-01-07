/*
    ** Factory method pattern
    1. 하위 클래스에게 구체적인 생성 위임
    2. PizzaStore는 구체적인 클래스들과 분리됨 -> DIP 성립
*/

import { ChicagoPizzaStore } from "./ChicagoPizzaStore";
import { NYPizzaStore } from "./NYPizzaStore";
import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./PizzaType";


const orderPizza = (ps: PizzaStore): void => {
    ps.orderPizza(PizzaType.CHEESE);
    ps.orderPizza(PizzaType.POTATO);
}

const test = (): void => {
    // let ps: PizzaStore = new ChicagoPizzaStore();
    // ps.orderPizza(PizzaType.CHEESE);
    orderPizza(new NYPizzaStore);
    console.log();
    orderPizza(new ChicagoPizzaStore);
    console.log();   
}

test();