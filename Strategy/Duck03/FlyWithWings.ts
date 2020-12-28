import { FlyStrategy } from "./FlyStrategy";

export class FlyWithWings implements FlyStrategy {
    fly(): void {
        console.log('날개로 나는중!');
        
    }
}