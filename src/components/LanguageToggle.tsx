"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { TbLanguage } from "react-icons/tb";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === "pt" ? "PT" : "EN";

  return (
    <button
      onClick={toggleLanguage}
      className="group relative px-3 py-1.5 rounded-md bg-[#202c32]/40 backdrop-blur-sm border border-white/10 shadow-md text-[#c0cbcd] flex items-center gap-2 font-button text-xs hover:bg-[#2a334d]/40 transition-all duration-300"
      aria-label="Toggle language"
    >
      <TbLanguage className="w-4 h-4 text-[#c0cbcd]/70 group-hover:text-[#c0cbcd] transition-colors" />
      <span className="font-mono tracking-wider">{currentLang}</span>
      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c0cbcd]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default LanguageToggle;
