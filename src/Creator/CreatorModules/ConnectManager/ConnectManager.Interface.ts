export namespace ConnectManagerInterface {
	export interface IClass<T extends string, K> {
		setConnect: (stage: T, fn: K) => void;
		getConnect: (stage: T) => K;
	}
}
