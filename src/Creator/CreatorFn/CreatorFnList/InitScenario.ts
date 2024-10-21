import { ScenarioFinish } from "../../CreatorList/Scenario/ScenarioList/ScenarioFinish";
import { BotInterface } from "../../../Modules/Bot/Interface/Bot.Interface";
import { CreatorFnBase } from "../CreatorFnBase";
import { CreatorInterface } from "../../Creator.Interface";

export class InitScenario extends CreatorFnBase implements CreatorInterface.IBase {
	private init() {
		const { connectScenario } = this.plugin;

		connectScenario.setConnect(BotInterface.EStage.FINISH, new ScenarioFinish(this.module));
		connectScenario.setConnect(BotInterface.EStage.PAYMENT_USER, new ScenarioFinish(this.module));
		connectScenario.setConnect(BotInterface.EStage.GET_USER_DATA, new ScenarioFinish(this.module));
	}

	private Reg() {
		this.module.bot.getMessage({ fn: this.handling() });
	}

	public execute() {
		this.init();
		this.Reg();
	}
}
