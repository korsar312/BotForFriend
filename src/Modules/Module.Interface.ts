import { BotAdapterInterface } from "./ModuleList/Bot/Adapter/Bot.Adapter.Interface";
import { LanguageAdapterInterface } from "./ModuleList/Language/Adapter/Language.Adapter.Interface";
import { LanguageInterface } from "./ModuleList/Language/Interface/Language.Interface";

export namespace ModuleInterface {
	export interface IClass {
		token: string;
		dict: LanguageInterface.TWord;
	}

	export interface IInitReturn {
		bot: BotAdapterInterface.IClass;
		lang: LanguageAdapterInterface.IClass;
	}
}
