import { LanguageAdapterInterface } from "./Language.Adapter.Interface";
import { LanguageImpInterface } from "../Imp/Language.Imp.Interface";

export class LanguageAdapter implements LanguageAdapterInterface.IClass {
	private adapter: LanguageImpInterface.IClass;

	constructor(instance: LanguageImpInterface.IClass) {
		this.adapter = instance;
	}

	getText(props: LanguageAdapterInterface.TGetText): string {
		return this.adapter.getText(props);
	}
}
