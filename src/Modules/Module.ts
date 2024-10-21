import { Config } from "../Config/Config";
import { Dict } from "../Config/Dict";
import { ModuleChooser } from "./ModuleList/ModuleChooser";
import { ModuleInterface } from "./Module.Interface";

export class Module {
	private chooser = new ModuleChooser({
		token: Config.TELEGRAM_BOT_TOKEN,
		dict: Dict,
	});

	protected module: ModuleInterface.IInitReturn = {
		lang: this.chooser.execute("lang"),
		bot: this.chooser.execute("bot"),
	};
}
