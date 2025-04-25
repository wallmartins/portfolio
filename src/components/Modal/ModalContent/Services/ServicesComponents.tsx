import React, { ReactElement } from "react";

interface IProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServicesComponents = ({ icon, title, description }: IProps) => {
  return (
    <div className="relative group pb-4 mb-4 last:mb-0 nth-[13]:mb-0 last:border-none nth-[13]:border-none nth-[odd]:pr-4 nth-[odd]:after:absolute nth-[odd]:after:top-0 nth-[odd]:after:right-0 nth-[odd]:after:h-[calc(100%-1rem)] nth-[odd]:after:w-px nth-[odd]:after:bg-[#73797b]/20 nth-[even]:pl-8 border-b-1 last:border-b-0 border-[#73797b]/20">
      <div className="bg-[#181d2c]/50 w-fit h-fit p-4 mt-2 mb-2 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg opacity-55 first:mt-0 nth-[2]:mt-0">
        {icon}
      </div>
      <h3 className="font-title text-[16px] text-[#c0cbcd]">{title}</h3>
      <p className="text-xs text-[#73797b] leading-5.5 font-body mb-4">
        {description}
      </p>
    </div>
  );
};

export default ServicesComponents;
