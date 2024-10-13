import { BotInterface } from "./Interface/Bot.Interface";

export class Bot implements BotInterface.IBot {
	private readonly adapter: BotInterface.IBotAdapter;

	constructor(adapter: BotInterface.IBotAdapter) {
		this.adapter = adapter;
	}

	public initCommand() {
		const btn = this.adapter.createBtnLinkCommand({
			text: "тыкни",
			btnText: "сюда",
			link: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
		});
		this.adapter.addCommandHandler({ command: BotInterface.ECommand.START, fn: btn });
	}

	public startBot() {
		this.adapter.start({ callback: () => console.log(3456789) });
	}

	public send() {
		this.adapter.sandMessage({ text: "" });
	}
}
