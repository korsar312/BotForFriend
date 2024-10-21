import { CreatorInterface } from "./Creator.Interface";
import { InitStart } from "./CreatorFn/CreatorFnList/InitStart";

export class Creator {
	private commandInit: CreatorInterface.IBase;
	private scenarioInit: CreatorInterface.IBase;
	private startInit: CreatorInterface.IBase;

	constructor(module: CreatorInterface.IClass, plugin: CreatorInterface.IPlugin) {
		this.commandInit = new InitStart(module, plugin);
		this.scenarioInit = new InitStart(module, plugin);
		this.startInit = new InitStart(module, plugin);
	}

	public invoke() {
		this.commandInit.execute();
		this.scenarioInit.execute();
		this.startInit.execute();
	}
}
