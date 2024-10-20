import { CreatorBase } from "../../CreatorBase";
import { BotAdapterInterface } from "../../../Modules/Bot/Adapter/Bot.Adapter.Interface";

export abstract class CommandBase extends CreatorBase<(ctx: BotAdapterInterface.IContextAdapter) => void> {}
