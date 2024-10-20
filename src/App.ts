import { LanguageInterface } from "./Modules/Language/Interface/Language.Interface";
import { Module } from "./Modules/Module";
import { Creator } from "./Creator/Creator";

export class App extends Module {
	private readonly creator = new Creator({
		lang: this.module.lang,
		bot: this.module.bot,
	});

	public start(): void {
		this.creator.invoke();

		this.module.bot.start({
			callback: () => {
				console.log(this.getText(LanguageInterface.EWord.START));
			},
		});
	}
}
