import React from "react";
import { useTranslation } from "react-i18next";
import { SiSpotify } from "react-icons/si";
import { TbArrowUpRight } from "react-icons/tb";

const MusicModalContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/album/5t78IIG7tiWQ9RUYApAJFG?utm_source=generator"
        width="100%"
        height="512"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-[280px] "
      ></iframe>
      <a
        href="https://open.spotify.com/intl-pt/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center pt-4 justify-between mt-2 border-t-1 border-[#73797b]/20"
      >
        <div className="flex items-center gap-3">
          <SiSpotify className="text-3xl fill-[#73797b]" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-white">{t("moreMusic")}</span>
            <span className="text-xs text-gray-400">{t("spotify")}</span>
          </div>
        </div>
        <TbArrowUpRight className="text-sm text-gray-500" />
      </a>
    </>
  );
};

export default MusicModalContent;
