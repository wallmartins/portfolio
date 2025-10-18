"use client";

import React from "react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

interface HeaderProps {
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

const Header = ({ isMobileMenuOpen = false, onMobileMenuToggle }: HeaderProps) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed py-2.5 top-0 left-0 w-full z-[100] bg-[#0d1220]/60 backdrop-blur-sm border-b border-white/10 shadow-md">
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
              {t("softwareEngineer")}
            </p>
          </div>
        </div>

        {/* Status - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="px-2 py-1.5 rounded-md bg-[#202c32]/40 backdrop-blur-sm border-b border-white/10 shadow-md text-[#c0cbcd] flex items-center gap-2 font-button text-xs">
            <span className="w-2 h-2 bg-[#2C854C] rounded-full"></span>
            {t("available")}
          </div>
        </div>

        {/* Language Toggle - Hidden on mobile */}
        <div className="hidden lg:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-lg bg-[#202c32]/40 backdrop-blur-sm border border-white/10 text-white hover:bg-[#202c32]/60 transition-colors z-[200]"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
