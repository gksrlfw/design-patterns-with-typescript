import { FlyStrategy } from "./FlyStrategy";
import { QuackStrategy } from "./QuackStrategey";

export abstract class Duck {
    private flyStrategy: FlyStrategy;
    private quackStrategy: QuackStrategy;
    constructor(private flyS: FlyStrategy, quackS: QuackStrategy) {
        this.flyStrategy = flyS;
        this.quackStrategy = quackS;
        // 이걸로 하니까 생성자에서 초기화안했다고 머라하네...
        // this.setFlyStrategy(flyS);
        // this.setQuackStrategy(quackS);
    }
    public setFlyStrategy(flys: FlyStrategy): void {
        this.flyStrategy = flys;
    }
    public setQuackStrategy(quacks: QuackStrategy): void {
        this.quackStrategy = quacks;
    }
    public quack(): void {
        this.quackStrategy.quack();
    }
    public fly(): void {
        this.flyStrategy.fly();
    }
    public abstract display(): void;
}