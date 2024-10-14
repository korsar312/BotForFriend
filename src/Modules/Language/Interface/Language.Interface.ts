export namespace LanguageInterface {
	export interface ILanguage {
		getText(props: TGetText): string;
	}

	export type TGetText = { word: EWord };

	export enum EWord {
		START = "START",
	}

	export type TWord = Record<EWord, string>;
}
