export namespace BotInterface {
	export enum EStage {
		GET_USER_DATA = "GET_USER_DATA",
		PAYMENT_USER = "PAYMENT_USER",
		FINISH = "FINISH",
	}

	export enum ECommand {
		START = "start",
	}

	export type TStage = Record<EStage, unknown>;

	export const fieldSessionName = "sessions";
}
