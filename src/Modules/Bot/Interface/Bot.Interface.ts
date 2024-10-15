import { Context } from "telegraf";

export namespace BotInterface {
	interface IBot {
		start(props: TStartAdapter): Promise<void>;
		addCommandHandler(props: TAddCommandHandlerAdapter): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandAdapter): TCallbackMessage;
		getMessage(props: TGetMessageAdapter): void;
		sendMessage(props: TSendMessageAdapter): void;
	}

	export interface IBotAdapter extends IBot {}
	export interface IBotImplement extends IBot {}

	type TStart = { callback?: () => void };
	type TAddCommandHandler = { command: ECommand; fn: TCallbackMessage };
	type TCreateBtnLinkCommand = { text: string; btnText: string; link: string };
	type TGetMessage = { fn: (text: string, id: number) => void };
	type TSendMessage = { id: number; text: string };

	export type TStartAdapter = TStart;
	export type TAddCommandHandlerAdapter = TAddCommandHandler;
	export type TCreateBtnLinkCommandAdapter = TCreateBtnLinkCommand;
	export type TGetMessageAdapter = TGetMessage;
	export type TSendMessageAdapter = TSendMessage;

	export type TStartImplement = TStart;
	export type TAddCommandHandlerImplement = TAddCommandHandler;
	export type TCreateBtnLinkCommandImplement = TCreateBtnLinkCommand;
	export type TGetMessageImplement = TGetMessage;
	export type TSendMessageImplement = TSendMessage;

	export enum ECommand {
		START = "start",
	}

	type TCallbackMessage = (ctx: Context) => void;
}
