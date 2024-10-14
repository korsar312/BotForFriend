import { BotInterface } from "../Interface/Bot.Interface";

export class BotAdapter implements BotInterface.IBotAdapter {
	private adapter: BotInterface.IBotImplementation;

	constructor(instance: BotInterface.IBotImplementation) {
		this.adapter = instance;
	}

	start(props: BotInterface.TStartAd): Promise<void> {
		return this.adapter.start(props);
	}

	addCommandHandler(props: BotInterface.TAddCommandHandlerAd): void {
		this.adapter.addCommandHandler(props);
	}

	createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommandAd) {
		return this.adapter.createBtnLinkCommand(props);
	}
}
