import { AllExecuteInterface } from "./AllExecute.Interface";
import { CreatorBase } from "../../CreatorBase";

export class AllExecute<T extends CreatorBase<void>> implements AllExecuteInterface.IClass<T> {
	private arrayReg: T[] = [];

	public addCommand(command: T): void {
		this.arrayReg.push(command);
	}

	public registerCommands(): void {
		this.arrayReg.forEach((reg) => reg.execute());
	}
}
