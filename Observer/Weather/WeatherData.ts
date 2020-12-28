import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherData implements Subject {
    private observers: Array<Observer> = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    constructor() {

    }
    registerObserver(o: Observer): void {
        if(o!==null ) this.observers.push(o);
    }
    remvoeObserver(o: Observer): void {
        this.observers.splice(this.observers.indexOf(o), 1);
    }
    notifyObservers(): void {
        this.observers.forEach(o => o.update(this.temperature, this.humidity, this.pressure));
    }
    measurementChanged(): void {
        this.notifyObservers();
    }
    setMeasurement(temperature: number, humidity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }
}