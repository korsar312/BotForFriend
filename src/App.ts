import { LanguageInterface } from "./Modules/Language/Interface/Language.Interface";
import { BotInterface } from "./Modules/Bot/Interface/Bot.Interface";
import { Module } from "./Modules/Module";

const { EWord } = LanguageInterface;
const { ECommand } = BotInterface;

export class App extends Module {
	public commandInit() {
		const btn = this.module.bot.createBtnLinkCommand({
			text: this.getText(EWord.START),
			btnText: this.getText(EWord.START),
			link: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
		});
		this.module.bot.addCommandHandler({ command: ECommand.START, fn: btn });
	}

	public go() {
		this.commandInit();
		this.module.bot.start({ callback: () => console.log(this.getText(EWord.START)) });
	}
}
