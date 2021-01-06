/*
    ** 생성자 관련 패턴을 사용하지 않았을 때
    orderPizza는 변하는 부분과 변하지 않는 부분이 묶여있고, 구체적 클래스에 의존하므로 DIP에 위배된다

    * '치즈', '감자' 등의 문자열을 이용하여 피자를 구분할 수 있지만 type safety를 제공해주기 번거롭다
    -> 열거형을 이용하자
*/

import { PizzaStore } from "./PizzaStore"
import { PizzaType } from "./PizzaType";

const test = (): void => {
    let ps: PizzaStore = new PizzaStore();
    ps.orderPizza(PizzaType.CHEESE);
    ps.orderPizza(PizzaType.POTATO);
}

test();