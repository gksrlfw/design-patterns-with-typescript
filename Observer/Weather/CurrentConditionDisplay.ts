import { Observer } from "./Observer";

export class CurrentConditionDisplay implements Observer {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    display(): void {
        console.log('날씨 최신 정보');
        console.log(this.temperature, this.humidity, this.pressure);
    }

    update(temperature: number, huminity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = huminity;
        this.pressure = pressure;
        this.display();
    }   
}