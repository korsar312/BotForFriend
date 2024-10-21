import { CreatorInterface } from "../Creator.Interface";
import { BotInterface } from "../../Modules/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../../Modules/Bot/Adapter/Bot.Adapter.Interface";

export class CreatorFnBase {
	constructor(
		protected readonly module: CreatorInterface.IClass,
		protected readonly plugin: CreatorInterface.IPlugin,
	) {}

	protected handling = (stageInit?: BotInterface.EStage) => {
		const connectScenario = this.plugin.connectScenario;

		return (ctx: BotAdapterInterface.IContextAdapter) => {
			const id = ctx.chat?.id || 0;
			const stage = stageInit || ctx.sessions[id];

			connectScenario.getConnect(stage).execute(id);
		};
	};
}
