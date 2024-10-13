import { BotInterface } from "../Bot.interface";

export class Bot implements BotInterface.IBot {
	private readonly adapter: BotInterface.IBotAdapter;

	constructor(adapter: BotInterface.IBotAdapter) {
		this.adapter = adapter;
	}

	public go() {
		this.adapter.start();
	}

	public send() {
		this.adapter.goMessage();
	}
}
