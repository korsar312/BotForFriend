import { CommandBase } from "../CommandBase";
import { CreatorInterface } from "../../../Creator.Interface";
import { BotInterface } from "../../../../Modules/ModuleList/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../../../../Modules/ModuleList/Bot/Adapter/Bot.Adapter.Interface";

export class CommandStart extends CommandBase {
	constructor(
		modules: CreatorInterface.IClass,
		protected readonly fn: (ctx: BotAdapterInterface.IContextAdapter) => void,
	) {
		super(modules);
	}
	public execute() {
		this.module.bot.addCommandHandler({ command: BotInterface.ECommand.START, fn: this.fn });
	}
}
