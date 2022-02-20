const vi: Record<string, string> =  {
    "setting": "Cài đặt",
    "changeTheme": "Đổi màu"
}

const en : Record<string, string>= {
    "setting": "Setting",
    "changeTheme": "Change Theme"
}

export const dictionaryList: Record<string, Record<string, string>> = {
    "vi": vi,
    "en": en
}

export const languageOptions = {
    en: 'English',
    vi: 'Vietnamese',
};

export const languageDropdown = Object.keys(languageOptions).map(x => x);