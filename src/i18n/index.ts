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

i18n
  .use(LanguageDetector) // detecta idioma do navegador
  .use(initReactI18next) // integra com react-i18next
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
    fallbackLng: "pt", // idioma padrão se não achar outro
    interpolation: {
      escapeValue: false, // React já faz escape
    },
  });

export default i18n;
