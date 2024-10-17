import { LanguageInterface } from "./Modules/Language/Interface/Language.Interface";
import { Module } from "./Modules/Module";
import { Command } from "./Creators/Commands/Command";
import { BotInterface } from "./Modules/Bot/Interface/Bot.Interface";

export class App extends Module {
	private readonly commandReg = new Command({
		lang: this.module.lang,
		bot: this.module.bot,
	});

	public handleScenario(): void {
		this.module.bot.getMessage({
			fn: (ctx) => {
				ctx.sessions[ctx.chat.id] = BotInterface.EStage.GET_USER_DATA;
			},
		});
	}

	public start(): void {
		this.commandReg.invoke();
		this.handleScenario();

		this.module.bot.start({
			callback: () => console.log(this.getText(LanguageInterface.EWord.START)),
		});
	}

	public handleError(): void {
		throw new Error("An error occurred");
	}
}
