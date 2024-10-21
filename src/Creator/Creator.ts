import { CreatorInterface } from "./Creator.Interface";
import { ScenarioFinish } from "./CreatorList/Scenario/ScenarioList/ScenarioFinish";
import { BotInterface } from "../Modules/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { CommandStart } from "./CreatorList/Command/CommandList/CommandStart";
import { LanguageInterface } from "../Modules/Language/Interface/Language.Interface";

export class Creator {
	constructor(
		private readonly module: CreatorInterface.IClass,
		private readonly plugin: CreatorInterface.IPlugin,
	) {
		this.initialize();
	}

	private initialize(): void {
		this.setupScenarios();
		this.setupCommand();
	}

	private setupScenarios(): void {
		const { connectScenario } = this.plugin;

		connectScenario.setConnect(BotInterface.EStage.FINISH, new ScenarioFinish(this.module));
		connectScenario.setConnect(BotInterface.EStage.PAYMENT_USER, new ScenarioFinish(this.module));
		connectScenario.setConnect(BotInterface.EStage.GET_USER_DATA, new ScenarioFinish(this.module));

		this.module.bot.getMessage({ fn: this.handling() });
	}

	private setupCommand(): void {
		const { regManager } = this.plugin;

		regManager.addCommand(new CommandStart(this.module, this.handling(BotInterface.EStage.FINISH)));

		regManager.registerCommands();
	}

	private handling = (stageInit?: BotInterface.EStage) => {
		const connectScenario = this.plugin.connectScenario;

		return (ctx: BotAdapterInterface.IContextAdapter) => {
			const id = ctx.chat?.id || 0;
			const stage = stageInit || ctx.sessions[id];

			connectScenario.getConnect(stage).execute(id);
		};
	};

	public invoke() {
		this.module.bot.start({
			callback: () => {
				console.log(this.module.lang.getText({ word: LanguageInterface.EWord.START }));
			},
		});
	}
}
