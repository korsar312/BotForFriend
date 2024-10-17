import { BotInterface } from "./Modules/Bot/Interface/Bot.Interface";
import { CommandInterface } from "./Creators/Commands/Command.Interface";

export class Scenario implements BotInterface.TStage {
	constructor(private readonly module: CommandInterface.IClass) {}

	public GET_USER_DATA(id: number) {
		this.module.bot.sendMessage({ text: "здравствуй чел. Дай данные", id });
		return;
	}
	public PAYMENT_USER(id: number, text: string) {
		//какая то функция обработки
		this.module.bot.sendMessage({ text: "Данные приняты. Оплати плз", id });
		return;
	}
	public FINISH(id: number) {
		//какая то функция cj[сохранения
		this.module.bot.sendMessage({ text: "Оплата подтверждена. Удачки", id });
		return;
	}
}
