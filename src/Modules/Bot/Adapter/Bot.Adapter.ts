import { BotInterface } from "../Interface/Bot.Interface";

export class BotAdapter implements BotInterface.IBotAdapter {
	private bot: BotInterface.IBotImplementation;

	constructor(botInstance: BotInterface.IBotImplementation) {
		this.bot = botInstance;
	}

	start(props: BotInterface.TStartAd): Promise<void> {
		return this.bot.start(props);
	}

	sandMessage(props: BotInterface.TSandMessageAd): void {
		this.bot.sandMessage(props);
	}

	addCommandHandler(props: BotInterface.TAddCommandHandlerAd): void {
		this.bot.addCommandHandler(props);
	}

	createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommandAd) {
		return this.bot.createBtnLinkCommand(props);
	}
}
