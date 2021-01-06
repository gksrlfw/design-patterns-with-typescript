
export abstract class Pizza {
    private name: string;
    protected constructor(name: string) {
        this.name = name;
    }
    prepare(): void {
        console.log('준비중: ', this.name);
    }
    bake(): void {
        console.log('Pizza: bake');
    }
    cut(): void {
        console.log('Pizza: cut');
    }
    box(): void {
        console.log('Pizza: box');
    }
}