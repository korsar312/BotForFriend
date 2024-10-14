import { Config } from "./src/Config/Config";
import { Init } from "./src/Config/Init";
import { Dict } from "./src/Config/Dict";

class index {
	private module = Init.execute({
		botToken: Config.TELEGRAM_BOT_TOKEN,
		dictionary: Dict,
	});

	public launchBot() {
		this.module.bot.initCommand();
		this.module.bot.startBot();
	}
}

new index().launchBot();
