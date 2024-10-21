import { BotAdapter } from "../Modules/Bot/Adapter/Bot.Adapter";
import { BotTelegraf } from "../Modules/Bot/Imp/Bot.Telegraf";
import { LanguageInterface } from "../Modules/Language/Interface/Language.Interface";
import { LanguageAdapter } from "../Modules/Language/Adapter/Language.Adapter";
import { LanguageImp } from "../Modules/Language/Imp/Language.Imp";
import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { LanguageAdapterInterface } from "../Modules/Language/Adapter/Language.Adapter.Interface";

interface IInit {
	botToken: string;
	dictionary: LanguageInterface.TWord;
}

export interface IInitReturn {
	bot: BotAdapterInterface.IClass;
	lang: LanguageAdapterInterface.IClass;
}

export class Init {
	static execute(initData: IInit): IInitReturn {
		const bot = createBot(initData.botToken);
		const lang = createLang(initData.dictionary);

		return {
			bot,
			lang,
		};
	}
}

function createFn<T, S>(Domain: T, Adapter: new (domain: T) => S): S {
	const adapter = new Adapter(Domain);

	return adapter;
}

function createBot(token: string) {
	return createFn(new BotTelegraf(token), BotAdapter);
}

function createLang(dict: LanguageInterface.TWord) {
	return createFn(new LanguageImp(dict), LanguageAdapter);
}
