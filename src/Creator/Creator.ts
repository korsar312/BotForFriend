import { CreatorInterface } from "./Creator.Interface";
import { InitStart } from "./CreatorFn/CreatorFnList/InitStart";

export class Creator implements CreatorInterface.ICreator {
	commandInit: CreatorInterface.IBase;
	scenarioInit: CreatorInterface.IBase;
	startInit: CreatorInterface.IBase;

	constructor(module: CreatorInterface.IClass, plugin: CreatorInterface.IPlugin) {
		this.commandInit = new InitStart(module, plugin);
		this.scenarioInit = new InitStart(module, plugin);
		this.startInit = new InitStart(module, plugin);
	}

	public execute() {
		this.commandInit.execute();
		this.scenarioInit.execute();
		this.startInit.execute();
	}
}
