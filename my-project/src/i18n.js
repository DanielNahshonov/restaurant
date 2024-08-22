import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import heTranslation from './locales/he/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ru: {
        translation: ruTranslation
      },
      he: {
        translation: heTranslation
      }
    },
    lng: "he", // Default language
    fallbackLng: "he",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
