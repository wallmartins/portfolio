import React from "react";
import { useTranslation } from "react-i18next";
import { GrDocumentPdf } from "react-icons/gr";

const DownloadCV = () => {
  const { t } = useTranslation();

  return (
    <a
      href="/cv-wallace-martins.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c0cbcd] px-4 py-2 rounded-lg text-center w-3xs"
    >
      <div className="flex flex-col items-center gap-3">
        <GrDocumentPdf size={20} />
        <span>{t("downloadPDF")}</span>
      </div>
    </a>
  );
};

export default DownloadCV;
