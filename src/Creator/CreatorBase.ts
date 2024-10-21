import { CreatorInterface } from "./Creator.Interface";

export abstract class CreatorBase<T> implements CreatorInterface.IBase {
	constructor(protected readonly module: CreatorInterface.IClass) {}

	abstract execute(...args: T[]): void;
}
