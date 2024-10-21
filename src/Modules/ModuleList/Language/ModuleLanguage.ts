import { LanguageImp } from "./Imp/Language.Imp";
import { LanguageInterface } from "./Interface/Language.Interface";
import { LanguageAdapter } from "./Adapter/Language.Adapter";
import { LanguageAdapterInterface } from "./Adapter/Language.Adapter.Interface";
import { ModuleBase } from "../../ModuleBase";

export class ModuleLanguage extends ModuleBase {
	constructor(protected readonly disc: LanguageInterface.TWord) {
		super();
	}

	public execute(): LanguageAdapterInterface.IClass {
		return this.create(new LanguageImp(this.disc), LanguageAdapter);
	}
}
