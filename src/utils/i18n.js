import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import arLang from "./locales/ar/ar.json";

const resources = {
  en: {
    translation: enLang,
  },
  ar: {
    translation: arLang,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem("lng") || "en",
    returnObjects: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
