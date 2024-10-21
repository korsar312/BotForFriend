import { BotTelegraf } from "./Imp/Bot.Telegraf";
import { BotAdapter } from "./Adapter/Bot.Adapter";
import { BotAdapterInterface } from "./Adapter/Bot.Adapter.Interface";
import { ModuleBase } from "../../ModuleBase";

export class ModuleBot extends ModuleBase {
	constructor(protected readonly token: string) {
		super();
	}

	public execute(): BotAdapterInterface.IClass {
		return this.create(new BotTelegraf(this.token), BotAdapter);
	}
}
