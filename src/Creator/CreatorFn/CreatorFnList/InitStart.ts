import { CreatorFnBase } from "../CreatorFnBase";
import { CreatorInterface } from "../../Creator.Interface";
import { LanguageInterface } from "../../../Modules/Language/Interface/Language.Interface";

export class InitStart extends CreatorFnBase implements CreatorInterface.IBase {
	public execute() {
		this.module.bot.start({
			callback: () => {
				console.log(this.module.lang.getText({ word: LanguageInterface.EWord.START }));
			},
		});
	}
}
