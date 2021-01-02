
/*
    - 컴퓨터는 유저가 냇던 이전 손에 대해 분석한 여러가지 전략을 취할 수 있다. 
    - PlayingStrategy 인터페이스 아래 구체적인 RandomStrategy, Other ... 등의 다양한 전략을 구현할 수 있다
    - 전략은 실행시간에 변경가능하다
    - 자바보다 열거형을 사용하기 불편함

    (구조만 잡고 내부 세부 구현은 생략)
*/

import { GameLogic } from "./GameLogic"
import { OtherStrategy } from "./OtherStrategy";
import { RandomStrategy } from "./RandomStrategy";

const test = (): void => {
    let game: GameLogic = new GameLogic(new RandomStrategy());
    let game2: GameLogic = new GameLogic(new OtherStrategy());
    console.log(game.playMookJiBa());   
}

test();