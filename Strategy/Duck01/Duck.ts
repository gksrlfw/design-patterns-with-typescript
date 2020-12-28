export abstract class Duck {
    public quack(): void {
        console.log("꽥꽥");
    }
    public swim(): void {
        console.log("수영가능");
    }
    public abstract display(): void;
}