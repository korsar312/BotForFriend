import { AllExecute } from "./CreatorModules/AllExecute/AllExecute";
import { ConnectManager } from "./CreatorModules/ConnectManager/ConnectManager";
import { ScenarioBase } from "./CreatorList/Scenario/ScenarioBase";
import { CommandBase } from "./CreatorList/Command/CommandBase";
import { BotAdapterInterface } from "../Modules/ModuleList/Bot/Adapter/Bot.Adapter.Interface";
import { LanguageAdapterInterface } from "../Modules/ModuleList/Language/Adapter/Language.Adapter.Interface";
import { BotInterface } from "../Modules/ModuleList/Bot/Interface/Bot.Interface";

export namespace CreatorInterface {
	export interface ICreator extends IBase {
		commandInit: CreatorInterface.IBase;
		scenarioInit: CreatorInterface.IBase;
		startInit: CreatorInterface.IBase;
	}

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
