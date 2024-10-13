import { BotTelegraf } from './src/Modules/Bot/Core/BotTelegraf';
import {Bot} from "./src/Modules/Bot/Bot";
import {BotAdapter} from "./src/Modules/Bot/Core/BotAdapter";

class index {
    private bot = new Bot(new BotAdapter(new BotTelegraf('')));


    public launchBot() {
        this.bot.go();
    }

}


new index().launchBot()