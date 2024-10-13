import { Context, Markup, Telegraf } from "telegraf";
import { BotInterface } from "../Interface/Bot.Interface";

export class BotTelegraf implements BotInterface.IBotImplementation {
	private bot: Telegraf;

	constructor(token: string) {
		this.bot = new Telegraf(token);
	}

	public start(props: BotInterface.TStartImp) {
		return this.bot.launch(props.callback);
	}

	public sandMessage(props: BotInterface.TSandMessageImp) {
		return this.bot.telegram.sendMessage(1, props.text);
	}

	public addCommandHandler(props: BotInterface.TAddCommandHandlerImp) {
		this.bot.command(props.command, props.fn);
	}

	public createBtnLinkCommand(props: BotInterface.TCreateBtnLinkCommandImp) {
		const btn = Markup.inlineKeyboard([[Markup.button.url(props.btnText, props.link)]]);

		return (ctx: Context) => ctx.reply(props.text, btn);
	}
}
