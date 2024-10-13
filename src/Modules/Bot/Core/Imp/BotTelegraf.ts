import { Markup, Telegraf } from "telegraf";
import { BotInterface } from "../../Bot.interface";

export class BotTelegraf implements BotInterface.IBotImplementation {
	private bot: Telegraf;

	constructor(token: string) {
		this.bot = new Telegraf(token);
	}

	public launchBot() {
		// Обработка команды /start
		this.bot.start((ctx) => {
			ctx.reply(
				"213",
				Markup.inlineKeyboard([
					[Markup.button.url("Перейти по ссылке", "https://example.com")], // Замените на нужную вам ссылку
				]),
			);
		});

		// Запускаем бота
		this.bot
			.launch()
			.then(() => {
				console.log("Бот запущен");
			})
			.catch((err) => {
				console.error("Ошибка при запуске бота:", err);
			});
	}

	public sendText() {
		this.bot.telegram.sendMessage(1, "");
	}
}
