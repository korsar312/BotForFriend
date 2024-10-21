import { ModuleInterface } from "../Module.Interface";
import { ModuleBot } from "./Bot/ModuleBot";
import { ModuleLanguage } from "./Language/ModuleLanguage";
import { BotAdapterInterface } from "./Bot/Adapter/Bot.Adapter.Interface";
import { LanguageAdapterInterface } from "./Language/Adapter/Language.Adapter.Interface";

export class ModuleChooser {
	constructor(protected readonly props: ModuleInterface.IClass) {}

	public execute(module: "bot"): BotAdapterInterface.IClass;
	public execute(module: "lang"): LanguageAdapterInterface.IClass;
	public execute(module: "bot" | "lang") {
		switch (module) {
			case "bot":
				return new ModuleBot(this.props.token).execute();
			case "lang":
				return new ModuleLanguage(this.props.dict).execute();
		}
	}
}
