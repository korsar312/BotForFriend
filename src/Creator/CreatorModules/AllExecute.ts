import { CreatorInterface } from "../Creator.Interface";

export class AllExecute {
	private arrayReg: CreatorInterface.IBase[] = [];

	public addCommand(command: CreatorInterface.IBase): void {
		this.arrayReg.push(command);
	}

	public registerCommands(): void {
		this.arrayReg.forEach((command) => command.execute());
	}
}
