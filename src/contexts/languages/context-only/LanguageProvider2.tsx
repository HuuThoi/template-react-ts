import React, { useState, FC } from 'react';
import { dictionaryList } from './data';
import { LanguageContext2 } from './LanguageContext2';

export const LanguageProvider2: FC = ({ children }) => {
    const [locale, setLanguage] = useState(localStorage.getItem('locale') || "en");

    const provider = {
        locale,
        changeLocale2: (_locale: string) => {
            const newLang = dictionaryList[_locale] ? _locale : "en";
            setLanguage(newLang);
            localStorage.setItem('locale', newLang);
        },
    };

    return (
             <LanguageContext2.Provider
                value={
                    provider
                }
            > 
                {children}
            </LanguageContext2.Provider>

    );
};