/*
    Duck01
    swim, quack만 있는 상태
*/

import { Duck } from './Duck';
import { MallardDuck } from './MallardDuck';
import { RedheadDuck } from './RedheadDuck';

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
    ducks.push(new RedheadDuck());
    ducks.push(new MallardDuck());
    ducks.map((d) => swimSimulation(d));
    ducks.map((d) => quackSimulation(d));
}
test();




