import React from "react";
import { GrDocumentPdf } from "react-icons/gr";

const DownloadCV = () => {
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
        <span>Clique aqui para fazer o download do PDF</span>
      </div>
    </a>
  );
};

export default DownloadCV;
