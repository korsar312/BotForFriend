import { BotInterface } from "./Interface/Bot.Interface";

export class Bot implements BotInterface.IBot {
	private readonly adapter: BotInterface.IBotAdapter;

	constructor(adapter: BotInterface.IBotAdapter) {
		this.adapter = adapter;
	}

	public startBot() {
		this.adapter.addCommandHandler({ command: BotInterface.ECommand.START, fn: () => "" });
		this.adapter.start();
	}

	public send() {
		this.adapter.goMessage();
	}
}
