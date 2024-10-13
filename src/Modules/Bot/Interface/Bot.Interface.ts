import { Context } from "telegraf";

export namespace BotInterface {
	export interface IBot {
		startBot(): void;
		send(): void;
	}

	export interface IBotAdapter {
		start(props: TTStartAd): Promise<void>;
		goMessage(): void;
		addCommandHandler(props: TAddCommandHandlerAd): void;
		createCallbackCommand(props: TCreateBtnLinkCommandAd): void;
	}

	export interface IBotImplementation {
		start(props: TTStartImp): Promise<void>;
		goMessage(): void;
		addCommandHandler(props: TAddCommandHandlerImp): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandImp): void;
	}

	export enum ECommand {
		START = "start",
	}

	export type TTStartAd = TTStartImp & {};
	export type TAddCommandHandlerAd = TAddCommandHandlerImp & { command: BotInterface.ECommand };
	export type TCreateBtnLinkCommandAd = TCreateBtnLinkCommandImp & {};

	export type TTStartImp = { callback?: () => void };
	export type TAddCommandHandlerImp = { command: string; fn: (ctx: Context) => void };
	export type TCreateBtnLinkCommandImp = { text: string; btnText: string; link: string };
}
