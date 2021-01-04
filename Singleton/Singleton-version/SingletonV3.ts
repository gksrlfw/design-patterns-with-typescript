/*
    내부 클래스 사용. 
    => 내부클래스를 지원하는 자바에서는 가장 효율적인 방법
    => 타입스크립트는 내부클래스를 지원하지 않는다
    => X
*/

export class SingletonV3 {
	static SingletonHolder(): SingletonV3 {
        const unique: SingletonV3 = new SingletonV3();
        return unique;
	}
    private constructor() {}
	public static getInstance(): SingletonV3 {
		return this.SingletonHolder();
	}
}
