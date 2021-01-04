/*
    단 하나의 객체만 필요로 할 때, 싱글톤을 사용할 수 있다
    보통
*/

import { SingletonV1 } from "./SingletonV1";
import { SingletonV2 } from "./SingletonV2";
import { SingletonV3 } from "./SingletonV3";
import { SingletonV4 } from "./SingletonV4";



const test = (): void => {
    const s1: SingletonV1 = SingletonV1.getInstance();
    const s2: SingletonV2 = SingletonV2.unique;
    const s3: SingletonV3 = SingletonV3.getInstance();
    const s4: SingletonV4 = SingletonV4.UNIQUE;

    console.log(s1, s2, s3, s4);
    
}
test();

