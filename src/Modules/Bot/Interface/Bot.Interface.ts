import { Context } from "telegraf";

export namespace BotInterface {
	export interface IBot {
		initCommand(): void;
		startBot(): void;
		send(): void;
	}

	export interface IBotAdapter {
		start(props: TStartAd): Promise<void>;
		sandMessage(props: TSandMessageAd): void;
		addCommandHandler(props: TAddCommandHandlerAd): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandAd): TCallbackMessage;
	}

	export interface IBotImplementation {
		start(props: TStartImp): Promise<void>;
		sandMessage(props: TSandMessageImp): void;
		addCommandHandler(props: TAddCommandHandlerImp): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandImp): TCallbackMessage;
	}

	export type TStartAd = TStartImp & {};
	export type TSandMessageAd = TSandMessageImp & {};
	export type TAddCommandHandlerAd = TAddCommandHandlerImp & { command: ECommand; fn: TCallbackMessage };
	export type TCreateBtnLinkCommandAd = TCreateBtnLinkCommandImp & {};

	export type TStartImp = { callback?: () => void };
	export type TSandMessageImp = { text: string };
	export type TAddCommandHandlerImp = { command: string; fn: TCallbackMessage };
	export type TCreateBtnLinkCommandImp = { text: string; btnText: string; link: string };

	export enum ECommand {
		START = "start",
	}

	type TCallbackMessage = (ctx: Context) => void;
}
