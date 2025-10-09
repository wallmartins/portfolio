"use client";

import Image from "next/image";
import React from "react";
import DraggableWrapper from "./Draggable/DraggableWrapper";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <DraggableWrapper
      centered
      responsive
      widthPercentage={50}
      heightPercentage={20}
      maxWidth={490}
      minHeight={720}
    >
      <div className="w-full h-full bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-4">
        <p className="font-button text-[#c0cbcd] text-left text-sm">About</p>
        <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg flex flex-col gap-4">
          <Image
            src="/about.jpg"
            width={450}
            height={450}
            alt="Foto de Wallace Martins em um estilo de desenho cyberpunk"
            priority
            className="rounded-sm shadow-md"
          />
          <h2 className="font-title text-2xl text-[#c0cbcd]">
            {t("heroTitle")}
          </h2>
          <p className="font-body text-sm text-[#99a2a4] text-justify whitespace-pre-line">
            {t("heroDescription")}
          </p>
        </div>
      </div>
    </DraggableWrapper>
  );
};

export default About;
