import { LanguageInterface } from "./Interface/Language.Interface";

export class Language implements LanguageInterface.ILanguage {
	private readonly adapter: LanguageInterface.ILanguageAdapter;

	constructor(adapter: LanguageInterface.ILanguageAdapter) {
		this.adapter = adapter;
	}

	getText(props: LanguageInterface.TGetText): string {
		return this.adapter.getText(props);
	}
}
