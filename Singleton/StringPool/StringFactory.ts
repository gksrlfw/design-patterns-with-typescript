export abstract class StringFactory {
    private static stringPool: Map<number, string> = new Map();
    static getInstance(s: string): string|undefined {
        let key: number = hashCode(s);
        if(!this.stringPool.has(key))
            this.stringPool.set(key, s);
        return this.stringPool.get(key);   
    }
}

const hashCode = (s: string): number => {
    return s.split("").reduce(function(a: number, b: string) {
        a=((a<<5)-a)+b.charCodeAt(0);return a&a
    },0);  
}
