export namespace LanguageInterface {
	interface ILanguage {
		getText(props: TGetText): string;
	}

	export interface ILanguageAdapter extends ILanguage {}
	export interface ILanguageImplement extends ILanguage {}

	type TGetText = { word: EWord };

	export type TGetTextAdapter = TGetText;
	export type TGetTextImplement = TGetText;

	export enum EWord {
		START = "START",
	}

	export type TWord = Record<EWord, string>;
}
