"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramBot = void 0;
const telegraf_1 = require("telegraf");
class TelegramBot {
    constructor(token) {
        this.bot = new telegraf_1.Telegraf(token);
    }
    start() {
        // Обработка команды /start
        this.bot.start((ctx) => {
            ctx.reply('213', telegraf_1.Markup.inlineKeyboard([
                [telegraf_1.Markup.button.url('Перейти по ссылке', 'https://example.com')], // Замените на нужную вам ссылку
            ]));
        });
        // Запускаем бота
        this.bot.launch()
            .then(() => {
            console.log('Бот запущен');
        })
            .catch((err) => {
            console.error('Ошибка при запуске бота:', err);
        });
    }
}
exports.TelegramBot = TelegramBot;
