import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from './translation/en.json';
import common_fr from './translation/fr.json';
import common_ar from './translation/ar.json';
const resources={
    en:{
        translation:common_en
    },
    fr:{
        translation:common_fr
    },
    ar:{
        translation:common_ar
    }
}
const lang=localStorage.getItem('lang')
i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng:lang,
    keySeparator:false,
    interpolation:{
        escapeValue:false
    },
    react:{
        useSuspense:false
    }
})
export default i18n;