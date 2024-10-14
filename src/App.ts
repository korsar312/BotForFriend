import { LanguageInterface } from "./Modules/Language/Interface/Language.Interface";
import { BotInterface } from "./Modules/Bot/Interface/Bot.Interface";
import { Module } from "./Modules/Module";

const { EWord } = LanguageInterface;
const { ECommand } = BotInterface;

export class App extends Module {
	public commandHandler() {
		const btn = this.module.bot.createBtnLinkCommand({
			text: this.getText(EWord.START),
			btnText: this.getText(EWord.START),
			link: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
		});
		this.module.bot.addCommandHandler({ command: ECommand.START, fn: btn });
	}

	public messageHandler() {
		this.module.bot.getMessage({
			fn: (text: string, id: number) => {
				this.module.bot.sendMessage({ id, text });
			},
		});
	}

	public go() {
		this.commandHandler();
		this.messageHandler();
		this.module.bot.start({ callback: () => console.log(this.getText(EWord.START)) });
	}
}
