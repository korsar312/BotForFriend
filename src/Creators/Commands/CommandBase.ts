import { CommandInterface } from "./Command.Interface";
import { LanguageInterface } from "../../Modules/Language/Interface/Language.Interface";

export abstract class CommandBase implements CommandInterface.ICommand {
	constructor(protected readonly module: CommandInterface.IClass) {}

	protected getText(word: LanguageInterface.EWord): string {
		return this.module.lang.getText({ word });
	}

	abstract register(): void;
}
