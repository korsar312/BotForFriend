import { Context, Markup, Telegraf } from "telegraf";
import { BotInterface } from "../Interface/Bot.Interface";

export class BotTelegraf implements BotInterface.IBotImplementation {
	private Implem: Telegraf;

	constructor(token: string) {
		this.Implem = new Telegraf(token);
	}

	public start(props: BotInterface.TStartImp) {
		return this.Implem.launch(props.callback);
	}

	public sandMessage(props: BotInterface.TSandMessageImp) {
		return this.Implem.telegram.sendMessage(1, props.text);
	}

	public addCommandHandler(props: BotInterface.TAddCommandHandlerImp) {
		this.Implem.command(props.command, props.fn);
	}

	public createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommandImp) {
		const btn = Markup.inlineKeyboard([[Markup.button.url(props.btnText, props.link)]]);

		return (ctx: Context) => ctx.reply(props.text, btn);
	}
}
