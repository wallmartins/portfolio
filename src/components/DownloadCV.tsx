"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { GrDocumentPdf } from "react-icons/gr";

const DownloadCV = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const cvFileName = currentLanguage === "en"
    ? "cv-wallace-martins-en.pdf"
    : "cv-wallace-martins.pdf";

  return (
    <div className="w-full flex justify-center p-4">
      <a
        href={`/${cvFileName}`}
        download={cvFileName}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c0cbcd] px-6 lg:px-8 py-4 rounded-lg text-center bg-[#181d2c]/50 hover:bg-[#181d2c]/70 transition-colors border border-white/10"
      >
        <div className="flex flex-col items-center gap-3">
          <GrDocumentPdf size={32} className="lg:size-40" />
          <span className="text-sm lg:text-base font-body">{t("downloadPDF")}</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadCV;
