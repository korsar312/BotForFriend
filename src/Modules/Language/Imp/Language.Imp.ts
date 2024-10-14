import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageImp implements LanguageInterface.ILanguage {
	private readonly dict: LanguageInterface.TWord;

	constructor(dict: LanguageInterface.TWord) {
		this.dict = dict;
	}

	public getText(props: LanguageInterface.TGetText) {
		return this.dict[props.word];
	}
}
