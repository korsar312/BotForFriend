import { Context } from "telegraf";

export namespace BotInterface {
	export interface IBot {
		start(props: TStart): Promise<void>;
		addCommandHandler(props: TAddCommandHandler): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommand): TCallbackMessage;
		getMessage(props: TGetMessage): void;
		sendMessage(props: TSendMessage): void;
	}

	export type TStart = { callback?: () => void };
	export type TAddCommandHandler = { command: ECommand; fn: TCallbackMessage };
	export type TCreateBtnLinkCommand = { text: string; btnText: string; link: string };
	export type TGetMessage = { fn: (text: string, id: number) => void };
	export type TSendMessage = { id: number; text: string };

	export enum ECommand {
		START = "start",
	}

	type TCallbackMessage = (ctx: Context) => void;
}
