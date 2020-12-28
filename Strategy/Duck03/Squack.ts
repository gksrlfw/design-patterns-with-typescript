import { QuackStrategy } from "./QuackStrategey";

export class Squack implements QuackStrategy {
    quack(): void {
        console.log('삑삑');
        
    }

}