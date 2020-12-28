/*
    Duck02
    fly 메서드 추가 -> Duck에는 빈 상태로, flyingDuck 인터페이스를 이용하여 날 수 있는 Duck을 정해주자
*/

import { MallardDuck } from "./MallardDuck";
import { Duck } from "../Duck02/Duck";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";
import { WoodenDuck } from "./WoodenDuck";

const flySimulation = (duck: Duck): void => {
    duck.display();
    duck.fly();
}

const swimSimulation = (duck: Duck): void => {
    duck.display();
    duck.swim();
}

const quackSimulation = (duck: Duck): void => {
    duck.display();
    duck.quack();
}

const test = (): void => {
    let ducks: Duck[] = [];
    ducks.push(new MallardDuck());
    ducks.push(new RedheadDuck());
    ducks.push(new RubberDuck());
    ducks.push(new WoodenDuck());
    ducks.map(d => swimSimulation(d));
    ducks.map(d => flySimulation(d));
    ducks.map(d => quackSimulation(d));
}
test();