import { Context, ContextText, NarrowedContext } from "telegraf";
import { Message, Update } from "telegraf/types";
import { BotInterface } from "../Interface/Bot.Interface";

export namespace BotTelegrafInterface {
	export interface IClass {
		start(props: TStart): Promise<void>;
		addCommandHandler(props: TAddCommandHandler): void;
		createBtnLink(props: TCreateBtnLink): object;
		getMessage(props: TGetMessage): void;
		sendMessage(props: TSendMessage): void;
	}

	export type TStart = { callback?: () => void };
	export type TAddCommandHandler = { command: string; fn: (ctx: Context) => void };
	export type TCreateBtnLink = { text: string; btnText: string; link: string };
	export type TGetMessage = { fn: (ctx: ContextText) => void };
	export type TSendMessage = { id: number; text: string };
}

declare module "telegraf" {
	export interface Context {
		[BotInterface.fieldSessionName]: Record<string, BotInterface.EStage>;
	}

	export type ContextText = NarrowedContext<Context<Update>, Update.MessageUpdate<Message.TextMessage>>;
}
