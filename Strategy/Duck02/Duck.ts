
export abstract class Duck {
    public quack(): void {
        console.log('꽥꽥');
    }
    public swim(): void {
        console.log('수영중');
    }
    public fly(): void {}           // 날 수 있는애들은 Flyable 인터페이스에서 정의하도록 한다 
    public abstract display(): void;
}