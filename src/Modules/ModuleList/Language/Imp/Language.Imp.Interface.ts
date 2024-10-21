import { LanguageInterface } from "../Interface/Language.Interface";

export namespace LanguageImpInterface {
	export interface IClass {
		getText(props: TGetText): string;
	}

	export type TGetText = { word: LanguageInterface.EWord };
}
