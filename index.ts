import { Config } from "./src/Config/Config";
import { Init } from "./src/Config/Init";

class index {
	private module = Init.execute({ botToken: Config.TELEGRAM_BOT_TOKEN });

	public launchBot() {
		this.module.bot.startBot();
	}
}

new index().launchBot();
