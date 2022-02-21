import React, { useState, FC } from 'react';
import { LanguageContext } from './LanguageContext';
import { IntlProvider } from 'react-intl';
import appLocales from './locales';

export const LanguageProvider: FC = ({ children }) => {
    // Get the locale to use. Use Redux, useContext, URL params or local storage
    // to manage this value.

    const [locale, setLanguage] = useState(localStorage.getItem('locale') || "en");

    const provider = {
        locale,
        changeLocale: (_locale: string) => {
            const newLang = _locale;
            setLanguage(newLang);
            localStorage.setItem('locale', newLang);
        },
    };

    // Load the language configuration
    const localeConfig = appLocales[locale];

    // Application top component (entrypoint)
    return (
        <LanguageContext.Provider value={provider}>
            <IntlProvider locale={localeConfig.locale} messages={localeConfig.messages}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};