"use client";

import Image from "next/image";
import React from "react";
import DraggableWrapper from "./Draggable/DraggableWrapper";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const content = (
    <div className="w-full h-full bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-3 lg:p-4">
      <p className="font-button text-[#c0cbcd] text-left text-sm drag-handle cursor-grab active:cursor-grabbing">{t("about")}</p>
      <div className="bg-[rgb(9,1,13)] p-3 lg:p-4 mt-3 lg:mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg flex flex-col gap-2 lg:gap-4">
        <div className="w-full relative">
          <Image
            src="/about.jpg"
            width={450}
            height={450}
            alt="Foto de Wallace Martins em um estilo de desenho cyberpunk"
            priority
            className="rounded-sm shadow-md w-full h-auto object-cover"
          />
        </div>
        <h2 className="font-title text-lg lg:text-2xl text-[#c0cbcd]">
          {t("heroTitle")}
        </h2>
        <div className="font-body text-xs lg:text-sm text-[#99a2a4] text-justify flex flex-col gap-3">
          {(() => {
            const description = t("heroDescription");
            return Array.isArray(description) && description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ));
          })()}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop version with DraggableWrapper */}
      <div className="hidden lg:block">
        <DraggableWrapper
          centered
          responsive
          widthPercentage={50}
          heightPercentage={20}
          maxWidth={490}
          minHeight={720}
        >
          {content}
        </DraggableWrapper>
      </div>

      {/* Mobile version without dragging */}
      <div className="lg:hidden w-full">
        {content}
      </div>
    </>
  );
};

export default About;
