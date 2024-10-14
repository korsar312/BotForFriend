import { Context } from "telegraf";

export namespace BotInterface {
	export interface IBotAdapter {
		start(props: TStartAd): Promise<void>;
		addCommandHandler(props: TAddCommandHandlerAd): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandAd): TCallbackMessage;
	}

	export interface IBotImplementation {
		start(props: TStartImp): Promise<void>;
		addCommandHandler(props: TAddCommandHandlerImp): void;
		createBtnLinkCommand(props: TCreateBtnLinkCommandImp): TCallbackMessage;
	}

	export type TStartAd = TStartImp & {};
	export type TAddCommandHandlerAd = TAddCommandHandlerImp & { command: ECommand; fn: TCallbackMessage };
	export type TCreateBtnLinkCommandAd = TCreateBtnLinkCommandImp & {};

	export type TStartImp = { callback?: () => void };
	export type TAddCommandHandlerImp = { command: string; fn: TCallbackMessage };
	export type TCreateBtnLinkCommandImp = { text: string; btnText: string; link: string };

	export enum ECommand {
		START = "start",
	}

	type TCallbackMessage = (ctx: Context) => void;
}
