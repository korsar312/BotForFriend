import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageAdapter implements LanguageInterface.ILanguageAdapter {
	private adapter: LanguageInterface.ILanguageImplement;

	constructor(instance: LanguageInterface.ILanguageImplement) {
		this.adapter = instance;
	}

	getText(props: LanguageInterface.TGetTextAdapter): string {
		return this.adapter.getText(props);
	}
}
