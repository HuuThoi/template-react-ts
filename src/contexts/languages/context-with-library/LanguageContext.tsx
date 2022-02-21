
import { createContext} from 'react';

export type LanguageContextType = {
    locale: string;
    changeLocale: (locale: string) => void;
}

const initialValue = {
    locale: '',
    changeLocale : () => {}
}

export const LanguageContext = createContext<LanguageContextType>(initialValue);