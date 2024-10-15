export namespace LanguageInterface {
	interface ILanguageImplement {
		getText(props: TGetTextAdapter): string;
	}

	export interface ILanguageAdapter extends ILanguageImplement {}

	export type TGetTextImplement = { word: EWord };

	export type TGetTextAdapter = TGetTextImplement;

	export enum EWord {
		START = "START",
	}

	export type TWord = Record<EWord, string>;
}
