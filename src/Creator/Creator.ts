import { CreatorInterface } from "./Creator.Interface";
import { InitStart } from "./CreatorFn/CreatorFnList/InitStart";
import { InitScenario } from "./CreatorFn/CreatorFnList/InitScenario";
import { InitCommand } from "./CreatorFn/CreatorFnList/InitCommand";

export class Creator implements CreatorInterface.ICreator {
	commandInit: CreatorInterface.IBase;
	scenarioInit: CreatorInterface.IBase;
	startInit: CreatorInterface.IBase;

	constructor(module: CreatorInterface.IClass, plugin: CreatorInterface.IPlugin) {
		this.commandInit = new InitCommand(module, plugin);
		this.scenarioInit = new InitScenario(module, plugin);
		this.startInit = new InitStart(module, plugin);
	}

	public execute() {
		this.commandInit.execute();
		this.scenarioInit.execute();
		this.startInit.execute();
	}
}
