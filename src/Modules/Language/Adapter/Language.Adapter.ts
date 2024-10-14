import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageAdapter implements LanguageInterface.ILanguageAdapter {
	private adapter: LanguageInterface.ILanguageImplementation;

	constructor(instance: LanguageInterface.ILanguageImplementation) {
		this.adapter = instance;
	}

	getText(props: LanguageInterface.TGetTextAd): string {
		return this.adapter.getText(props);
	}
}
