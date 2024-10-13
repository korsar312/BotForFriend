import { BotInterface } from "../../Bot.interface";

export class BotAdapter implements BotInterface.IBotAdapter {
	private bot: BotInterface.IBotImplementation;

	constructor(botInstance: BotInterface.IBotImplementation) {
		this.bot = botInstance;
	}

	start(): void {
		this.bot.launchBot();
	}

	goMessage(): void {
		this.bot.sendText();
	}
}
