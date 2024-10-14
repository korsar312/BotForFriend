import { Init } from "../Config/Init";
import { Config } from "../Config/Config";
import { Dict } from "../Config/Dict";
import { LanguageInterface } from "./Language/Interface/Language.Interface";

export class Module {
	protected module = Init.execute({
		botToken: Config.TELEGRAM_BOT_TOKEN,
		dictionary: Dict,
	});

	protected getText(word: LanguageInterface.EWord): string {
		return this.module.lang.getText({ word });
	}
}
