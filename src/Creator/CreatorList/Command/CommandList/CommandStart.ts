import { CommandBase } from "../CommandBase";
import { BotInterface } from "../../../../Modules/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../../../../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { CreatorInterface } from "../../../Creator.Interface";

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
