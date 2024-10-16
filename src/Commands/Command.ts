import { CommandManager } from "./CommandManager";
import { StartCommand } from "./List/StartCommand";
import { CommandInterface } from "./Command.Interface";

export class Command {
	private readonly commandManager = new CommandManager();

	constructor(private readonly module: CommandInterface.IClass) {
		this.initializeCommands();
	}

	private initializeCommands(): void {
		this.commandManager.addCommand(new StartCommand(this.module));
	}

	public invoke(): void {
		this.commandManager.registerCommands();
	}
}
