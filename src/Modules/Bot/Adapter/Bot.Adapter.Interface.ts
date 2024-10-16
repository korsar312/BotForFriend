import { BotInterface } from "../Interface/Bot.Interface";
import { Context, ContextText } from "telegraf";

export namespace BotAdapterInterface {
	export interface IClass {
		start(props: TStart): Promise<void>;
		addCommandHandler(props: TAddCommandHandler): void;
		createBtnLink(props: TCreateBtnLink): object;
		getMessage(props: TGetMessage): void;
		sendMessage(props: TSendMessage): void;
	}

	export type TStart = { callback?: () => void };
	export type TAddCommandHandler = { command: BotInterface.ECommand; fn: (ctx: IContextAdapter) => void };
	export type TCreateBtnLink = { text: string; btnText: string; link: string };
	export type TGetMessage = { fn: (ctx: IContextTextAdapter) => void };
	export type TSendMessage = { id: number; text: string };

	//тут по хорошему бы сделать класс адаптер, но видит бог на сколько мне лень это делать
	export interface IContextAdapter extends Context {}
	export interface IContextTextAdapter extends ContextText {}
}
