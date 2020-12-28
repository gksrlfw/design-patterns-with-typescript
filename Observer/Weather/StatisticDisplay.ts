import { Observer } from "./Observer";

export class StatisticDisplay implements Observer {
    private temperatureLog: Array<number> = [];
    private humidityLog: Array<number> = [];
    private pressureLog: Array<number> = [];
    display(): void {
        console.log('날씨통계정보')
    }

    update(temperature: number, humidity: number, pressure: number): void {
        if(this.temperatureLog.length === 5) this.temperatureLog.shift();
        if(this.humidityLog.length === 5) this.humidityLog.shift();
        if(this.pressureLog.length === 5) this.pressureLog.shift();
        this.temperatureLog.push(temperature);
        this.humidityLog.push(humidity);
        this.pressureLog.push(pressure);
        if(this.temperatureLog.length === 5) this.display();
    }
    
}