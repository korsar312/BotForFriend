export class ModuleBase {
	protected create<T, S>(Domain: T, Adapter: new (domain: T) => S): S {
		return new Adapter(Domain);
	}
}
