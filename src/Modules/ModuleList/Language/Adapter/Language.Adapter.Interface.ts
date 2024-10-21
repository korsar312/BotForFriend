import { LanguageInterface } from "../Interface/Language.Interface";

export namespace LanguageAdapterInterface {
	export interface IClass {
		getText(props: TGetText): string;
	}

	export type TGetText = { word: LanguageInterface.EWord };
}
