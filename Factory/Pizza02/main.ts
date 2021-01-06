/*
    ** Simple Factory pattern
    1. 단순히 변하는 부분과 변하지 않는 부분을 분리하여 구현한다 (이 경우, 변하는 부분은 Factory에 작성했다)
       -> 추가되는 피자가 있으면 PizzaFactory만 수정해주면 된다

    2. 전략패턴을 이용하여 팩토리 메서드를 주입받아 사용할 수 있다
*/

import { PizzaFactory } from "./PizzaFactory";
import { PizzaStore } from "./PizzaStore"
import { PizzaType } from "./PizzaType";

const test = (): void => {
    let ps: PizzaStore = new PizzaStore();
    ps.setPizzaFactory(new PizzaFactory());
    ps.orderPizza(PizzaType.CHEESE);
    ps.orderPizza(PizzaType.POTATO);
}

test();