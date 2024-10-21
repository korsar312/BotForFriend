import { CreatorFnBase } from "../CreatorFnBase";
import { CreatorInterface } from "../../Creator.Interface";
import { CommandStart } from "../../CreatorList/Command/CommandList/CommandStart";
import { BotInterface } from "../../../Modules/Bot/Interface/Bot.Interface";

export class InitCommand extends CreatorFnBase implements CreatorInterface.IBase {
	private init() {
		const { regManager } = this.plugin;

		regManager.addCommand(new CommandStart(this.module, this.handling(BotInterface.EStage.FINISH)));
	}

	private Reg() {
		const { regManager } = this.plugin;

		regManager.registerCommands();
	}

	public execute() {
		this.init();
		this.Reg();
	}
}
