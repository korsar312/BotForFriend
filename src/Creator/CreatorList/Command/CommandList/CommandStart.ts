import { CommandBase } from "../CommandBase";
import { BotInterface } from "../../../../Modules/Bot/Interface/Bot.Interface";
import { BotAdapterInterface } from "../../../../Modules/Bot/Adapter/Bot.Adapter.Interface";

export class CommandStart extends CommandBase {
	public execute(fn: (ctx: BotAdapterInterface.IContextAdapter) => void) {
		this.module.bot.addCommandHandler({ command: BotInterface.ECommand.START, fn });
	}
}
