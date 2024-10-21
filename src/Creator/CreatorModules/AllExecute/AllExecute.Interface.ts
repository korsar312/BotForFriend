export namespace AllExecuteInterface {
	export interface IClass<T> {
		addCommand: (command: T) => void;
		registerCommands: () => void;
	}
}
