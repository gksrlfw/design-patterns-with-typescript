import { FlyStrategy } from "./FlyStrategy";

export class FlyWithRocket implements FlyStrategy {
    fly(): void {
        console.log('로켓으로 나는중!');
        
    }
}