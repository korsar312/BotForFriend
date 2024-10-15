import { BotInterface } from "../Interface/Bot.Interface";

export class BotAdapter implements BotInterface.IBotAdapter {
	private implement: BotInterface.IBotImplement;

	constructor(instance: BotInterface.IBotImplement) {
		this.implement = instance;
	}

	start(props: BotInterface.TStartAdapter) {
		return this.implement.start(props);
	}

	addCommandHandler(props: BotInterface.TAddCommandHandlerAdapter) {
		this.implement.addCommandHandler(props);
	}

	createBtnLink(props: BotInterface.TCreateBtnLinkAdapter) {
		return this.implement.createBtnLink(props);
	}

	getMessage(props: BotInterface.TGetMessageAdapter) {
		this.implement.getMessage(props);
	}

	sendMessage(props: BotInterface.TSendMessageAdapter) {
		this.implement.sendMessage(props);
	}
}
