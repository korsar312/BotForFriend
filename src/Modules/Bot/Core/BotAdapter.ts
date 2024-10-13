import {BotInterface} from "./Bot.interface";

export class BotAdapter implements BotInterface.IBotAdapter{
    private bot: BotInterface.IBotDomain;

    constructor(botInstance: BotInterface.IBotDomain) {
        this.bot = botInstance;
    }

    start(): void { this.bot.launchBot() }
    goMessage(): void { this.bot.sendText() }
}
