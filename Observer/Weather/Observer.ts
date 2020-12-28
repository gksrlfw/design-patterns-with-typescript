export interface Observer {
    update(temperature: number, huminity: number, pressure: number): void;
}