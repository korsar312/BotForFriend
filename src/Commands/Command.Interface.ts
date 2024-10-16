import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { LanguageAdapterInterface } from "../Modules/Language/Adapter/Language.Adapter.Interface";

export namespace CommandInterface {
	export interface IClass {
		bot: BotAdapterInterface.IClass;
		lang: LanguageAdapterInterface.IClass;
	}

	export interface ICommand {
		register(): void;
	}
}
