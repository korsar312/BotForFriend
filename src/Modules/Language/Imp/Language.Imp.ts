import { LanguageInterface } from "../Interface/Language.Interface";
import { LanguageImpInterface } from "./Language.Imp.Interface";

export class LanguageImp implements LanguageImpInterface.IClass {
	private readonly dict: LanguageInterface.TWord;

	constructor(dict: LanguageInterface.TWord) {
		this.dict = dict;
	}

	public getText(props: LanguageImpInterface.TGetText) {
		return this.dict[props.word];
	}
}
