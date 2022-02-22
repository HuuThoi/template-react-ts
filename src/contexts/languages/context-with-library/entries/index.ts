import EnLang from './en_US';
import ViLang from './vi';

interface LocaleConfig {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const appLocales: LocaleConfig = {
    en: EnLang,
    vi: ViLang
};

export default appLocales;