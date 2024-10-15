import { LanguageInterface } from "../Interface/Language.Interface";

export class LanguageImp implements LanguageInterface.ILanguageImplement {
	private readonly dict: LanguageInterface.TWord;

	constructor(dict: LanguageInterface.TWord) {
		this.dict = dict;
	}

	public getText(props: LanguageInterface.TGetTextImplement) {
		return this.dict[props.word];
	}
}
