import { CommandBase } from "../CommandBase";

export class CommandManager {
	private commands: CommandBase[] = [];

	public addCommand(command: CommandBase): void {
		this.commands.push(command);
	}

	public registerCommands(): void {
		this.commands.forEach((command) => command.register());
	}
}
