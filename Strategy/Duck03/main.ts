/*
    Duck03
    전략패턴 적용
    : 현재 Duck의 fly와 quack은 오리 종류에 따라 달라진다.
    Duck은 fly, quack 전략 두개를 계속 유지하고, 각각의 청동, 나무 등의 오리가 가질 전략들을 생성할 때 넣어준다
    상속이 아닌 has-a를 이용하여 구현한 것이 핵심

*/

import { MallardDuck } from "./MallardDuck";
import { Duck } from "./Duck";
import { RedheadDuck } from "./RedheadDuck";
import { RubberDuck } from "./RubberDuck";
import { WoodenDuck } from "./WoodenDuck";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";
import { FlyNoWays } from "./FlyNoWays";
import { Squack } from "./Squack";
import { FlyWithRocket } from "./FlyWithRocket";

const flySimulation = (duck: Duck): void => {
    duck.display();
    duck.fly();
}

const quackSimulation = (duck: Duck): void => {
    duck.display();
    duck.quack();
}

const test = (): void => {
    let ducks: Duck[] = [];
    let d1: Duck = new MallardDuck(new FlyWithWings(), new Quack());
    let d2: Duck = new RedheadDuck(new FlyWithWings(), new Quack());
    ducks.push(d1);
    ducks.push(d2);
    ducks.push(new RubberDuck(new FlyNoWays(), new Squack()));
    ducks.push(new WoodenDuck(new FlyNoWays(), new Quack()));
    console.log('오리날기!!!!!!!!!!!!!!!!');
    ducks.map(d => flySimulation(d));
    console.log('오리꽥꽥!!!!!!!!!!!!!!!!');
    ducks.map(d => quackSimulation(d));

    d1.setFlyStrategy(new FlyWithRocket());
    d2.setFlyStrategy(new FlyNoWays());
    console.log('오리날기!!!!!!!!!!!!!!!!');
    ducks.map(d => flySimulation(d));
}
test();