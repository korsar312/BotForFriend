import { Module } from "./Modules/Module";
import { Creator } from "./Creator/Creator";
import { AllExecute } from "./Creator/CreatorModules/AllExecute/AllExecute";
import { ConnectManager } from "./Creator/CreatorModules/ConnectManager/ConnectManager";

export class App extends Module {
	private readonly creator = new Creator(
		{
			lang: this.module.lang,
			bot: this.module.bot,
		},
		{
			regManager: new AllExecute(),
			connectScenario: new ConnectManager(),
		},
	);

	public start(): void {
		this.creator.invoke();
	}
}
