
import { createContext} from 'react';

export type LanguageContextType2 = {
    locale: string;
    changeLocale2: (locale: string) => void;
}

const initialValue = {
    locale: '',
    changeLocale2 : () => {},
}

export const LanguageContext2 = createContext<LanguageContextType2>(initialValue);