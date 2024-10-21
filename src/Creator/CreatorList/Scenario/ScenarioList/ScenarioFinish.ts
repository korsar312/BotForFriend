import { ScenarioBase } from "../ScenarioBase";
import { LanguageInterface } from "../../../../Modules/ModuleList/Language/Interface/Language.Interface";

export class ScenarioFinish extends ScenarioBase {
	public execute(id: number) {
		const text = this.module.lang.getText({ word: LanguageInterface.EWord.START });

		this.module.bot.sendMessage({ text, id, extra: {} });
	}
}
