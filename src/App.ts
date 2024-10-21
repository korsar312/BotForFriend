import { Module } from "./Modules/Module";
import { Creator } from "./Creator/Creator";
import { AllExecute } from "./Creator/CreatorModules/AllExecute/AllExecute";
import { ConnectManager } from "./Creator/CreatorModules/ConnectManager/ConnectManager";
import { CreatorInterface } from "./Creator/Creator.Interface";

export class App extends Module {
	creator: CreatorInterface.ICreator;

	constructor() {
		super();

		const module: CreatorInterface.IClass = { lang: this.module.lang, bot: this.module.bot };
		const plugin: CreatorInterface.IPlugin = { regManager: new AllExecute(), connectScenario: new ConnectManager() };

		this.creator = new Creator(module, plugin);
	}

	public start(): void {
		this.creator.execute();
	}
}
