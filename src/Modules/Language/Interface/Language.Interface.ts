export namespace LanguageInterface {
	export interface ILanguageAdapter {
		getText(props: TGetTextAd): string;
	}

	export interface ILanguageImplementation {
		getText(props: TGetTextImp): string;
	}

	export type TGetTextAd = TGetTextImp & {};
	export type TGetTextImp = { word: EWord };

	export enum EWord {
		START = "START",
	}

	export type TWord = Record<EWord, string>;
}
