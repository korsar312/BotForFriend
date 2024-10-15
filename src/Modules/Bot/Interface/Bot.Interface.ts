import { Context } from "telegraf";

export namespace BotInterface {
	export interface IBotImplement {
		start(props: TStartAdapter): Promise<void>;
		addCommandHandler(props: TAddCommandHandlerAdapter): void;
		createBtnLink(props: TCreateBtnLinkAdapter): object;
		getMessage(props: TGetMessageAdapter): void;
		sendMessage(props: TSendMessageAdapter): void;
	}

	export interface IBotAdapter extends IBotImplement {}

	export type TStartImplement = { callback?: () => void };
	export type TAddCommandHandlerImplement = { command: ECommand; fn: (ctx: Context) => void };
	export type TCreateBtnLinkImplement = { text: string; btnText: string; link: string };
	export type TGetMessageImplement = { fn: (text: string, id: number) => void };
	export type TSendMessageImplement = { id: number; text: string };

	export type TStartAdapter = TStartImplement;
	export type TAddCommandHandlerAdapter = TAddCommandHandlerImplement & { fn: (ctx: ЕContextAdapter) => void };
	export type TCreateBtnLinkAdapter = TCreateBtnLinkImplement;
	export type TGetMessageAdapter = TGetMessageImplement;
	export type TSendMessageAdapter = TSendMessageImplement;

	export enum ECommand {
		START = "start",
	}

	type ЕContextAdapter = {
		reply: (text: string, options?: object) => Promise<void>;
	};
}
