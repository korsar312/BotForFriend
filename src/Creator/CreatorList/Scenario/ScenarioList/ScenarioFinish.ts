import { ScenarioBase } from "../ScenarioBase";

export class ScenarioFinish extends ScenarioBase {
	public execute(id: number) {
		this.module.bot.sendMessage({ text: "finish", id, extra: {} });
	}
}
