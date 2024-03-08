import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend'; // For loading translations from files
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json'; 
import pl from './locales/pl.json'; 

i18n
  .use(Backend) // Load translations
  .use(LanguageDetector)  // Detect user language
  .use(initReactI18next) // Connect with React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pl: { translation: pl },
    },
    fallbackLng: 'en', // Default language

    // Other options
    debug: true, // Display console logs during development

    interpolation: {
      escapeValue: false // To avoid escaping HTML entities 
    }
  });

export default i18n;
