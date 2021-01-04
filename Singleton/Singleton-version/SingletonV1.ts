/* 
	보통 new를 통해 객체를 생성하고 new는 생성자를 피연산자로 사용한다
		* const sington = new SingletonV1();
		-> public 생성자를 제공하면 객체 생성을 제한할 수 없다
	
	=> 생성자는 private로 만들되, 내부에서 생성할 수 있는 별도 생성 메서드를 만든다
	=> 단순한 방법이지만 멀티 스레딩 환경에서는 객체가 여러개 생길 가능성이 존재한다
	=> lazy instantiation
*/

export class SingletonV1 {
	private count: number = 0;
	private static unique: SingletonV1 | null = null;
	// 생성자는 반드시 private이어야 생성을 제한할 수 있음
	private constructor() {}
	public static getInstance(): SingletonV1 {
		if(this.unique==null) this.unique = new SingletonV1();
		return this.unique;
	}
	public increase(): void {
		++this.count;
	}
	public getCount(): number {
		return this.count;
	}
}
