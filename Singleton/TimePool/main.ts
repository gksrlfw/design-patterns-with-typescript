/*  
    String pool과 같은 개념이다
*/

import { Time } from "./TimePool";

const test = (): void => {
        
        let t1: Time|undefined = Time.of(2, 10, 5);
        let t2: Time|undefined = Time.of(10, 2, 5);
        let t3: Time|undefined = Time.of(5, 2, 10);
        let t4: Time|undefined = Time.of(2, 10, 5);

        console.log(t1==t2);
        console.log(t2==t3);
        console.log(t1==t3);
        console.log(t1==t4);
        console.log(t2==t4);
        console.log(t2==t2); 
}

test();