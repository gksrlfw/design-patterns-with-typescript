import { Duck } from '../Duck02/Duck';
import { FlyingDuck } from './FlyingDuck';

export class MallardDuck extends Duck implements FlyingDuck {
    public display(): void {
        console.log('청동오리');
    }
    fly(): void {
        console.log('나는 청동오리, 날아');
    }

}