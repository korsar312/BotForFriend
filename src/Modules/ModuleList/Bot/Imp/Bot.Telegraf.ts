import { Markup, Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { BotTelegrafInterface } from "./Bot.Telegraf.Interface";
import { BotInterface } from "../Interface/Bot.Interface";

export class BotTelegraf implements BotTelegrafInterface.IClass {
	private realization: Telegraf;

	constructor(token: string) {
		this.realization = new Telegraf(token);
		this.realization.use(
			new LocalSession({
				database: "user_db.json",
				property: BotInterface.fieldSessionName,
			}).middleware(),
		);
	}

	public start(props: BotTelegrafInterface.TStart) {
		return this.realization.launch(props.callback);
	}

	public addCommandHandler(props: BotTelegrafInterface.TAddCommandHandler) {
		this.realization.command(props.command, props.fn);
	}

	public createBtnLink(props: BotTelegrafInterface.TCreateBtnLink) {
		return Markup.inlineKeyboard([[Markup.button.url(props.btnText, props.link)]]);
	}

	public getMessage(props: BotTelegrafInterface.TGetMessage) {
		this.realization.on("text", props.fn);
	}

	public sendMessage(props: BotTelegrafInterface.TSendMessage) {
		const asd = this.createBtnLink({ link: "", btnText: "", text: "" });
		this.realization.telegram.sendMessage(props.id, props.text, props.extra);
	}
}
