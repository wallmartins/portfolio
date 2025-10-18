"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa os JSONs de tradução
import ptTranslation from "../../public/locales/pt/translation.json";
import enTranslation from "../../public/locales/en/translation.json";
import ptBlog from "../../public/locales/pt/blog.json";
import enBlog from "../../public/locales/en/blog.json";
import ptProjects from "../../public/locales/pt/projects.json";
import enProjects from "../../public/locales/en/projects.json";

const getBrowserLanguage = (): string => {
  if (typeof navigator === "undefined") {
    return "pt";
  }

  const browserLang = navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "pt";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation,
        blog: ptBlog,
        projects: ptProjects,
      },
      en: {
        translation: enTranslation,
        blog: enBlog,
        projects: enProjects,
      },
    },
    lng: getBrowserLanguage(),
    fallbackLng: "pt",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
