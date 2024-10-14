import { BotInterface } from "../Interface/Bot.Interface";

export class BotAdapter implements BotInterface.IBot {
	private adapter: BotInterface.IBot;

	constructor(instance: BotInterface.IBot) {
		this.adapter = instance;
	}

	start(props: BotInterface.TStart) {
		return this.adapter.start(props);
	}

	addCommandHandler(props: BotInterface.TAddCommandHandler) {
		this.adapter.addCommandHandler(props);
	}

	createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommand) {
		return this.adapter.createBtnLinkCommand(props);
	}

	getMessage(props: BotInterface.TGetMessage) {
		this.adapter.getMessage(props);
	}

	sendMessage(props: BotInterface.TSendMessage) {
		this.adapter.sendMessage(props);
	}
}
