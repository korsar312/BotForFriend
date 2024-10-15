import { Markup, Telegraf } from "telegraf";
import { BotInterface } from "../Interface/Bot.Interface";

export class BotTelegraf implements BotInterface.IBotImplement {
	private realization: Telegraf;

	constructor(token: string) {
		this.realization = new Telegraf(token);
	}

	public start(props: BotInterface.TStartImplement) {
		return this.realization.launch(props.callback);
	}

	public addCommandHandler(props: BotInterface.TAddCommandHandlerImplement) {
		this.realization.command(props.command, props.fn);
	}

	public createBtnLink(props: BotInterface.TCreateBtnLinkImplement) {
		return Markup.inlineKeyboard([[Markup.button.url(props.btnText, props.link)]]);
	}

	public getMessage(props: BotInterface.TGetMessageImplement) {
		this.realization.on("text", (res) => {
			props.fn(res.message.text, res.message.chat.id);
		});
	}

	public sendMessage(props: BotInterface.TSendMessageImplement) {
		this.realization.telegram.sendMessage(props.id, props.text);
	}
}
