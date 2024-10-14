import { Bot } from "../Modules/Bot/Bot";
import { BotAdapter } from "../Modules/Bot/Adapter/Bot.Adapter";
import { BotTelegraf } from "../Modules/Bot/Imp/Bot.Telegraf";
import { BotInterface } from "../Modules/Bot/Interface/Bot.Interface";
import { Language } from "../Modules/Language/Language";
import { LanguageAdapter } from "../Modules/Language/Adapter/Language.Adapter";
import { LanguageImp } from "../Modules/Language/Imp/Language.Imp";
import { LanguageInterface } from "../Modules/Language/Interface/Language.Interface";

interface IInit {
	botToken: string;
	dictionary: LanguageInterface.TWord;
}

interface IInitReturn {
	bot: BotInterface.IBot;
	lang: LanguageInterface.ILanguage;
	//payment: BotInterface.IBot;
	//table: BotInterface.IBot;
}

export class Init {
	static execute(initData: IInit): IInitReturn {
		const bot = createBot(initData.botToken);
		const lang = createLang(initData.dictionary);
		//const payment = createPayment();
		//const table = createTable();

		return {
			bot,
			lang,
			//payment,
			//table
		};
	}
}

function createFn<T, S, C>(Domain: T, Adapter: new (domain: T) => S, UseCase: new (service: S) => C): C {
	const adapter = new Adapter(Domain);
	const useCase = new UseCase(adapter);

	return useCase;
}

function createBot(token: string) {
	return createFn(new BotTelegraf(token), BotAdapter, Bot);
}

function createLang(dict: LanguageInterface.TWord) {
	return createFn(new LanguageImp(dict), LanguageAdapter, Language);
}

function createPayment() {
	return createFn(new BotTelegraf("token"), BotAdapter, Bot);
}

function createTable() {
	return createFn(new BotTelegraf("token"), BotAdapter, Bot);
}
