/*
    eager instantiation
    -> lazy instantiation과 달리 getter를 꼭 제공할 필요가 없음

    => 프로그램이 실행되면 인스턴스가 생기므로 조금의 비효율이 있다
*/

export class SingletonV2 {
	// eager instantiation의 경우에는 final 키워드 사용 가능 
	public static unique: SingletonV2 = new SingletonV2();
	private constructor() {}          // 생성자는 반드시 private이어야 생성을 제한할 수 있음
}