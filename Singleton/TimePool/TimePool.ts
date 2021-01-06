import { time } from "console";

export class Time {
    private hour: number;
    private minute: number;
    private second: number;
    private static timePool: Map<number, Time> = new Map();

    // 생성자 오버로딩 지원 안함..
    // private constructor(hour: number) { this(hour, 0, 0); }
    // private constructor(hour: number, minute: number) { this(hour, 0, 0); }
    private constructor(hour: number, minute: number, second: number) { 
        this.hour = (hour>=0 && hour<24) ? hour: 0;
		this.minute = (minute>=0 && minute<60) ? minute: 0;
		this.second = (second>0 && second<60) ? second: 0;
    }

    gethour(): number { return this.hour; }
    getminute(): number { return this.minute; }
    getsecond(): number { return this.second; }

    // 매개변수가 다른 오버로딩은 지원하지 않는다...
    // static of(hour: number, minute?: number, second?: number): Time|undefined { return this.of(hour, 0, 0); }
    // static of(hour: number, minute?: number, second?: number): Time|undefined { return this.of(hour, minute, 0); }
    static of(hour: number, minute?: number, second?: number): Time|undefined {
        if(minute === undefined) minute = 0;
        if(second === undefined) second = 0;
        let str: string = `${hour}h${minute}m${second}s`;
        let key: number = hashCode(str);
        if(!this.timePool.has(key)) this.timePool.set(key, new Time(hour, minute, second));
        return this.timePool.get(key);
    }
}

const hashCode = (s: string): number => {
    return s.split("").reduce(function(a: number, b: string) {
        a=((a<<5)-a)+b.charCodeAt(0);return a&a
    },0);  
}