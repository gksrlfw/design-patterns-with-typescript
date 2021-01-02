/*
    Beverage를 CondimentDecorator가 계속 장식한다
    기존의 Beverage에 대한 아무런 수정 없이 추가적인 기능을 계속 추가할 수 있다
*/

import { Beverage } from "./Beverage"
import { DarkRoast } from "./DarkRoast";
import { HouseBlend } from "./HouseBlend";
import { Mocha } from "./Mocha";
import { Whip } from "./Whip";


const test = (): void => {
    let beverage: Beverage = new HouseBlend();
    beverage = new Whip(beverage);
    beverage = new Mocha(beverage);
    console.log(beverage.getDescription(), beverage.cost());
    
    let beverage4: Beverage = new DarkRoast();
    beverage4 = new Mocha(beverage4);
    beverage4 = new Whip(beverage4);
    beverage4 = new Whip(beverage4);
    console.log(beverage4.getDescription(), beverage4.cost());
}
test();