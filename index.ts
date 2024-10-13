import { Config } from "./src/Config";
import { Init } from "./src/Init";

class index {
	private module = Init.execute({ botToken: Config.TELEGRAM_BOT_TOKEN });

	public launchBot() {
		this.module.bot.go();
		console.log("старт бота");
	}
}

new index().launchBot();
