import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageAdapter implements LanguageInterface.ILanguage {
	private adapter: LanguageInterface.ILanguage;

	constructor(instance: LanguageInterface.ILanguage) {
		this.adapter = instance;
	}

	getText(props: LanguageInterface.TGetText): string {
		return this.adapter.getText(props);
	}
}
