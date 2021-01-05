
/*
    자바나 자바스크립트에서의 문자열은 불변객체이다
    -> str[1] = 'a'와 같이 특정 문자를 마음대로 변경할 수 없다
    -> 한번 생성된 문자열은 다시 생성되지 않는다
*/

import { StringFactory } from "./StringFactory";

const test = (): void => {
    
    let s2: string|undefined = StringFactory.getInstance("apple");
    let s1: string|undefined = StringFactory.getInstance("apple");
    let s3: string|undefined = StringFactory.getInstance("paple");
    let s4: string|undefined = StringFactory.getInstance("banana");
    let s5: string|undefined = StringFactory.getInstance("banana");
    console.log(s1==s2);
    console.log(s3==s2);
    console.log(s4==s5);
}

test();

