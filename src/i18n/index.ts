"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa os JSONs de tradução
import pt from "../../public/locales/pt/translation.json";
import en from "../../public/locales/en/translation.json";

i18n
  .use(LanguageDetector) // detecta idioma do navegador
  .use(initReactI18next) // integra com react-i18next
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: "pt", // idioma padrão se não achar outro
    interpolation: {
      escapeValue: false, // React já faz escape
    },
  });

export default i18n;
