import { BotTelegraf } from "./Modules/Bot/Core/Imp/BotTelegraf";
import { Bot } from "./Modules/Bot/Core/Bot";
import { BotAdapter } from "./Modules/Bot/Core/Adapter/BotAdapter";
import { BotInterface } from "./Modules/Bot/Bot.interface";

interface IInit {
	botToken: string;
}

interface IInitReturn {
	bot: BotInterface.IBot;
	payment: BotInterface.IBot;
	table: BotInterface.IBot;
}

export class Init {
	static execute(initData: IInit): IInitReturn {
		const bot = createBot(initData.botToken);
		const payment = createPayment();
		const table = createTable();

		return { bot, payment, table };
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

function createPayment() {
	return createFn(new BotTelegraf("token"), BotAdapter, Bot);
}

function createTable() {
	return createFn(new BotTelegraf("token"), BotAdapter, Bot);
}
