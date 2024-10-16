import { LanguageInterface } from "./Modules/Language/Interface/Language.Interface";
import { Module } from "./Modules/Module";
import { Command } from "./Commands/Command";

export class App extends Module {
	private readonly commandReg = new Command({
		lang: this.module.lang,
		bot: this.module.bot,
	});

	public start(): void {
		this.commandReg.invoke();

		this.module.bot.start({
			callback: () => console.log(this.getText(LanguageInterface.EWord.START)),
		});
	}

	public handleError(): void {
		throw new Error("An error occurred");
	}
}
