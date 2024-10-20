export class ConnectManager<T extends string, K> {
	private connectList: Map<T, K> = new Map();

	public setConnect(stage: T, fn: K) {
		this.connectList.set(stage, fn);
	}

	public getConnect(stage: T): K {
		const fn = this.connectList.get(stage);
		if (!fn) throw new Error(`Нет состояния для ${stage}`);

		return this.connectList.get(stage) as K;
	}
}
