import { QuackStrategy } from "./QuackStrategey";

export class Quack implements QuackStrategy {
    quack(): void {
        console.log('꽥꽥');
        
    }

}