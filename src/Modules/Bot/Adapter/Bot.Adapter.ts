import { BotInterface } from "../Interface/Bot.Interface";

export class BotAdapter implements BotInterface.IBotAdapter {
	private bot: BotInterface.IBotImplementation;

	constructor(botInstance: BotInterface.IBotImplementation) {
		this.bot = botInstance;
	}

	start(props: BotInterface.TTStartAd): Promise<void> {
		return this.bot.start(props);
	}

	goMessage(): void {
		this.bot.goMessage();
	}

	addCommandHandler(props: BotInterface.TAddCommandHandlerAd): void {
		this.bot.addCommandHandler(props);
	}

	createCallbackCommand(props: BotInterface.TCreateBtnLinkCommandAd): void {
		this.bot.createBtnLinkCommand(props);
	}
}
