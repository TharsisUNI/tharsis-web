import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import navbar_en from './en/navbar.json';
import navbar_es from './es/navbar.json';

const resources = {
  en: {
    navbar: navbar_en,
  },
  es: {
    navbar: navbar_es,
  },
}

i18next.use(initReactI18next).init({ resources, lng: "en" });

export default i18next;
