
export abstract class Beverage {
    private description: string = '이름없는 음료';
    setDescription(description: string): void {
        this.description = description;
    }

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;
}
