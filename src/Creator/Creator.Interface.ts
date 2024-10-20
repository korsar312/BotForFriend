import { LanguageAdapterInterface } from "../Modules/Language/Adapter/Language.Adapter.Interface";
import { BotAdapterInterface } from "../Modules/Bot/Adapter/Bot.Adapter.Interface";
import { AllExecute } from "./CreatorModules/AllExecute";
import { ConnectManager } from "./CreatorModules/ConnectManager";
import { BotInterface } from "../Modules/Bot/Interface/Bot.Interface";
import { ScenarioBase } from "./CreatorList/Scenario/ScenarioBase";

export namespace CreatorInterface {
	export interface IClass {
		bot: BotAdapterInterface.IClass;
		lang: LanguageAdapterInterface.IClass;
	}

	export interface ICreatorModule {
		regManager: AllExecute;
		connectScenario: ConnectManager<BotInterface.EStage | BotInterface.ECommand, ScenarioBase>;
	}

	export interface IBase {
		execute(): void;
	}
}
