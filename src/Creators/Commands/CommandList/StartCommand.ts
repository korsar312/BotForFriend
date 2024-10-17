import { BotInterface } from "../../../Modules/Bot/Interface/Bot.Interface";
import { LanguageInterface } from "../../../Modules/Language/Interface/Language.Interface";
import { CommandBase } from "../CommandBase";

export class StartCommand extends CommandBase {
	public register() {
		const btn = this.module.bot.createBtnLink({
			text: this.getText(LanguageInterface.EWord.START),
			btnText: this.getText(LanguageInterface.EWord.START),
			link: "https://chatgpt.com",
		});

		this.module.bot.addCommandHandler({
			command: BotInterface.ECommand.START,
			fn: (ctx) => ctx.reply(this.getText(LanguageInterface.EWord.START), btn),
		});
	}
}
