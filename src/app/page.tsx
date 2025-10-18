"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import About from "@/components/About";
import Menu from "@/components/Menu/Menu";
import ModalManager from "@/components/Modal/ModalManager";
import { MobileMenu } from "@/components/MobileMenu";
import { MobileModalManager } from "@/components/Modal/MobileModalManager";
import Header from "@/components/Header";

type ModalType =
  | "about"
  | "services"
  | "projects"
  | "experience"
  | "blog"
  | "contact"
  | "cv";

export default function Home() {
  const [currentMobileModal, setCurrentMobileModal] = useState<ModalType>("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleMobileMenuClick = (itemId: string) => {
    // Se for CV no mobile, baixa diretamente
    if (itemId === "cv") {
      const currentLanguage = i18n.language;
      const cvFileName = currentLanguage === "en"
        ? "cv-wallace-martins-en.pdf"
        : "cv-wallace-martins.pdf";

      const link = document.createElement("a");
      link.href = `/${cvFileName}`;
      link.download = cvFileName;
      link.click();
      return;
    }

    setCurrentMobileModal(itemId as ModalType);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <div className="p-13 pb-20 text-white relative">
        {/* Desktop ModalManager */}
        <div className="hidden lg:block">
          <ModalManager />
          <About />
        </div>

        {/* Mobile Components */}
        <div className="lg:hidden">
          <MobileModalManager currentModal={currentMobileModal} />
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onItemClick={handleMobileMenuClick}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Footer Menu - visible on both */}
        <Menu />
      </div>
    </>
  );
}
