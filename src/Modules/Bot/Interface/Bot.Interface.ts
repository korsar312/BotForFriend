export namespace BotInterface {
	export enum EStage {
		GET_USER_DATA = "GET_USER_DATA",
	}

	export enum ECommand {
		start = "start",
	}

	export type TCommand = Record<ECommand, unknown>;

	export const fieldSessionName = "sessions";
}
