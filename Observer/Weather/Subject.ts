import { Observer } from "./Observer";

export interface Subject {
    registerObserver(o: Observer): void;
    remvoeObserver(o: Observer): void;
    notifyObservers(): void;
}