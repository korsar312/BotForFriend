import { ConnectManagerInterface } from "./ConnectManager.Interface";

export class ConnectManager<T extends string, K> implements ConnectManagerInterface.IClass<T, K> {
	private connectList: Map<T, K> = new Map();

	public setConnect(stage: T, fn: K) {
		this.connectList.set(stage, fn);
	}

	public getConnect(stage: T) {
		const fn = this.connectList.get(stage);
		if (!fn) throw new Error(`Нет состояния для ${stage}`);

		return fn;
	}
}
