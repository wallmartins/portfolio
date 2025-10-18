"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);
    setCurrentLanguage(i18n.language);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const displayLang = currentLanguage === "pt" ? "PT" : "EN";
  const countryCode = currentLanguage === "pt" ? "BR" : "US";

  return (
    <button
      onClick={toggleLanguage}
      className="group relative px-3 py-1.5 rounded-md bg-[#202c32]/40 backdrop-blur-sm border border-white/10 shadow-md text-[#c0cbcd] flex items-center gap-2 font-button text-xs hover:bg-[#2a334d]/40 transition-all duration-300"
      aria-label="Toggle language"
    >
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: "1.2em",
          height: "1.2em",
        }}
        title={countryCode}
      />
      <span className="font-mono tracking-wider">{displayLang}</span>
      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c0cbcd]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default LanguageToggle;
