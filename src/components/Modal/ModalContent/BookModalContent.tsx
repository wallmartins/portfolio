import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillAmazonSquare } from "react-icons/ai";
import { TbArrowUpRight } from "react-icons/tb";

const BookModalContent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[280px] flex flex-col justify-center">
      <div className="rounded-md overflow-hidden shadow-md mb-4 flex justify-center">
        <Image
          src="/book.jpg"
          alt="Book Cover"
          width={600}
          height={600}
          className="w-[97%] bg-transparent object-cover rounded-md"
        />
      </div>

      <a
        href="https://www.amazon.com/dp/B0F1DS36YC"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-md p-2 transition-colors"
      >
        <AiFillAmazonSquare />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-white">{t("getItNow")}</span>
          <span className="text-xs text-gray-400">{t("amazon")}</span>
        </div>
        <TbArrowUpRight className="text-sm text-gray-500" />
      </a>
    </div>
  );
};

export default BookModalContent;
