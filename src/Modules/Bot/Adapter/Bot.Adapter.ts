import { BotAdapterInterface } from "./Bot.Adapter.Interface";
import { BotTelegrafInterface } from "../Imp/Bot.Telegraf.Interface";

export class BotAdapter implements BotAdapterInterface.IClass {
	private implement: BotTelegrafInterface.IClass;

	constructor(instance: BotTelegrafInterface.IClass) {
		this.implement = instance;
	}

	start(props: BotAdapterInterface.TStart) {
		return this.implement.start(props);
	}

	addCommandHandler(props: BotAdapterInterface.TAddCommandHandler) {
		this.implement.addCommandHandler(props);
	}

	createBtnLink(props: BotAdapterInterface.TCreateBtnLink) {
		return this.implement.createBtnLink(props);
	}

	getMessage(props: BotAdapterInterface.TGetMessage) {
		this.implement.getMessage(props);
	}

	sendMessage(props: BotAdapterInterface.TSendMessage) {
		this.implement.sendMessage(props);
	}
}
