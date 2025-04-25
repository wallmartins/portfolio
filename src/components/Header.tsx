import React from "react";
import Image from "next/image";
import Clock from "./clock";

const Header = () => {
  return (
    <nav className="fixed py-2.5 top-0 left-0 w-full z-50 bg-[#0d1220]/60 backdrop-blur-sm border-b border-white/10 shadow-md">
      <div className="mx-auto px-2 flex items-center justify-between">
        {/* Perfil */}
        <div className="flex items-center gap-3">
          <Image
            src="/icon-me.png"
            alt="Logo da empresa"
            width={30}
            height={30}
            priority
            className="rounded-sm shadow-md"
          />
          <div>
            <p className="font-button text-[#dbe1e3] text-sm">
              Wallace Martins
            </p>
            <p className="font-body font-light text-xs text-gray-400 font-body">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-4">
          <div className="px-2 py-1.5 rounded-md bg-[#202c32]/40 backdrop-blur-sm border-b border-white/10 shadow-md text-[#c0cbcd] flex items-center gap-2 font-button text-xs">
            <span className="w-2 h-2 bg-[#2C854C] rounded-full"></span>
            Available
          </div>
        </div>

        <div className="text-xs text-[#c0cbcd] flex items-center gap-2 font-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Clock />
        </div>
      </div>
    </nav>
  );
};

export default Header;
