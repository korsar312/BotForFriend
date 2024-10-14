import { Context, Markup, Telegraf } from "telegraf";
import { BotInterface } from "../Interface/Bot.Interface";

export class BotTelegraf implements BotInterface.IBot {
	private Implem: Telegraf;

	constructor(token: string) {
		this.Implem = new Telegraf(token);
	}

	public start(props: BotInterface.TStart) {
		return this.Implem.launch(props.callback);
	}

	public addCommandHandler(props: BotInterface.TAddCommandHandler) {
		this.Implem.command(props.command, props.fn);
	}

	public createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommand) {
		const btn = Markup.inlineKeyboard([[Markup.button.url(props.btnText, props.link)]]);

		return (ctx: Context) => ctx.reply(props.text, btn);
	}

	public getMessage(props: BotInterface.TGetMessage) {
		this.Implem.on("text", (res) => {
			props.fn(res.message.text, res.message.chat.id);
		});
	}

	public sendMessage(props: BotInterface.TSendMessage) {
		this.Implem.telegram.sendMessage(props.id, props.text);
	}
}
