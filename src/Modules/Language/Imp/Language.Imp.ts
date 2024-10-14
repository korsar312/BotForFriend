import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageImp implements LanguageInterface.ILanguageImplementation {
	private readonly dict: LanguageInterface.TWord;

	constructor(dict: LanguageInterface.TWord) {
		this.dict = dict;
	}

	public getText(props: LanguageInterface.TGetTextImp) {
		return this.dict[props.word];
	}
}
