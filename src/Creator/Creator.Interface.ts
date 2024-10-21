import { LanguageAdapterInterface } from "../Modules/Language/Adapter/Language.Adapter.Interface";
import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { AllExecute } from "./CreatorModules/AllExecute/AllExecute";
import { ConnectManager } from "./CreatorModules/ConnectManager/ConnectManager";
import { BotInterface } from "../Modules/Bot/Interface/Bot.Interface";
import { ScenarioBase } from "./CreatorList/Scenario/ScenarioBase";
import { CommandBase } from "./CreatorList/Command/CommandBase";

export namespace CreatorInterface {
	export interface IClass {
		bot: BotAdapterInterface.IClass;
		lang: LanguageAdapterInterface.IClass;
	}

	export interface IPlugin {
		regManager: AllExecute<CommandBase>;
		connectScenario: ConnectManager<BotInterface.EStage | BotInterface.ECommand, ScenarioBase>;
	}

	export interface IBase {
		execute(): void;
	}
}
