import { Init } from "../Config/Init";
import { Config } from "../Config/Config";
import { Dict } from "../Config/Dict";

export class Module {
	protected module = Init.execute({
		botToken: Config.TELEGRAM_BOT_TOKEN,
		dictionary: Dict,
	});
}
