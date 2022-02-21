import { dictionaryList } from "contexts/languages/context-only/data";
import { LanguageContext2 } from "contexts/languages/context-only/LanguageContext2";
import { useContext } from "react";
import { string } from "yup";

interface ILanguagePros {
    tid: string
}

const TextMultiLanguage = (props: ILanguagePros) => {
    const languageContext = useContext(LanguageContext2);
    let lang = dictionaryList[languageContext.locale];

    return <></>
    //comment for test another context
    return (
        <>
            {lang[props.tid] || props.tid}
        </>
    )
};

export default TextMultiLanguage;