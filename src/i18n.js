import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './localT/en.json';
import translationAr from './localT/ar.json';
import translationUr from './localT/ur.json';
const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  },
  ur: {
    translation: translationUr
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;