import { CreatorInterface } from "./Creator.Interface";
import { AllExecute } from "./CreatorModules/AllExecute";
import { ScenarioFinish } from "./CreatorList/Scenario/ScenarioList/ScenarioFinish";
import { ConnectManager } from "./CreatorModules/ConnectManager";
import { BotInterface } from "../Modules/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";

export class Creator {
	private readonly modules: CreatorInterface.ICreatorModule = {
		regManager: new AllExecute(),
		connectScenario: new ConnectManager(),
	};

	constructor(private readonly module: CreatorInterface.IClass) {
		this.initialize();
	}

	private initialize(): void {
		this.modules.connectScenario.setConnect(BotInterface.EStage.FINISH, new ScenarioFinish(this.module));
		this.modules.connectScenario.setConnect(BotInterface.EStage.PAYMENT_USER, new ScenarioFinish(this.module));
		this.modules.connectScenario.setConnect(BotInterface.EStage.GET_USER_DATA, new ScenarioFinish(this.module));

		this.module.bot.addCommandHandler({
			command: BotInterface.ECommand.START,
			fn: this.handling(),
		});

		this.module.bot.getMessage({ fn: this.handling() });
	}

	private handling = () => {
		const connectScenario = this.modules.connectScenario;

		return (ctx: BotAdapterInterface.IContextAdapter) => {
			const id = ctx.chat?.id || 0;
			const stage = ctx.sessions[id];

			connectScenario.getConnect(stage).execute(id);
		};
	};

	public invoke() {}
}
