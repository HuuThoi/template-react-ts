import { useTheme } from 'contexts/themes/hookTheme';
import { useContext, useState } from 'react';
import Dropdown from 'react-dropdown';
import Switch from 'react-switch';
import 'react-dropdown/style.css';
import './Setting.scss';
import { useIntl } from 'react-intl';

import { languageDropdown } from 'contexts/languages/context-only/data';
import TextMultiLanguage from 'components/text-multi-language/TextMultiLanguage';
import { LanguageContext2 } from 'contexts/languages/context-only/LanguageContext2';
import { LanguageContext } from 'contexts/languages/context-with-library/LanguageContext';

const Setting = () => {
    // context theme
    const [check, setCheck] = useState(false);
    const { changeTheme } = useTheme();
    const handleChangeTheme = () => {
        setCheck(!check);
        changeTheme();
    }

    // context without library
    const languageContext2 = useContext(LanguageContext2);
    const [localeSelected2] = useState(languageContext2.locale);
    const onSelect2 = (option: any) => {
        languageContext2.changeLocale2(option.value);
    }

    // context with intl
    const intl = useIntl();
    const translatedTitle = intl.formatMessage({ id: 'default.button-title' })

    const languageContext = useContext(LanguageContext);
    const [localeSelected] = useState(languageContext.locale);
    const onSelect = (option: any) => {
        languageContext.changeLocale(option.value);
    }

    return (
        <div className="setting">
            <div className="row">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleChangeTheme}
                    checked={check}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <div className="margin-left-10"><TextMultiLanguage tid="changeTheme" /></div>
            </div>

            {/* <div className="row">
                <label>Change language using context only</label>
            </div>
            <Dropdown className="custom-dropdown" value={localeSelected2} options={languageDropdown} onChange={onSelect2} placeholder="Select language" /> */}

            <div className="row">
                <label>Change language using context and library</label>
            </div>
            <Dropdown className="custom-dropdown" value={localeSelected} options={languageDropdown} onChange={onSelect} placeholder="Select language" />

            {/* cach 1: dung class component FormattedMessage */}
            {/* <FormattedMessage id="default.settingPage" /> */}

            {/* cach 2: dung hook useIntl */}
            {/* <button title={translatedTitle}>
                <FormattedMessage id="default.settingPage" />
            </button> */}
        </div>
    )
}

export default Setting;