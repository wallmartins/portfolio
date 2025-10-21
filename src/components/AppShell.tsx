"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Menu from "@/components/Menu/Menu";
import { MobileMenu } from "@/components/MobileMenu";
import { useModal } from "@/contexts/ModalContext";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const {
    setCurrentModal,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    toggleMobileMenu,
  } = useModal();

  const handleMobileMenuClick = (itemId: string) => {
    if (itemId === "cv") {
      const currentLanguage = i18n.language;
      const cvFileName =
        currentLanguage === "en"
          ? "cv-wallace-martins-en.pdf"
          : "cv-wallace-martins.pdf";

      const link = document.createElement("a");
      link.href = `/${cvFileName}`;
      link.download = cvFileName;
      link.click();
      return;
    }

    setCurrentModal(itemId as Parameters<typeof setCurrentModal>[0]);
    router.push("/", { scroll: false });
  };

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <div className="p-13 pb-20 text-white relative">
        {children}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onItemClick={handleMobileMenuClick}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <Menu />
      </div>
    </>
  );
}
