import { IconProps } from "@/types/sidebar";
import React from "react";

const Icon = ({ icon, label, onClick }: IconProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 cursor-pointer"
      onClick={() => onClick()}
    >
      <div className="px-3.5 py-3 rounded-md bg-[#202c32]/40 backdrop-blur-sm border-b border-white/10 shadow-md text-[#c0cbcd] mt-4 :first-child:mt-0">
        {icon}
      </div>
      <p className="font-button text-sm text-[#c0cbcd]">{label}</p>
    </div>
  );
};

export default Icon;
