import enMessages from './en_US';
import viMessages from './vi';

interface LocaleConfig {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const appLocales: LocaleConfig = {
    en: {
        messages: enMessages,
        locale: 'en'
    },
    vi: {
        messages: viMessages,
        locale: 'vi'
    }
};

export default appLocales;