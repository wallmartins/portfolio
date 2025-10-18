"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaUserTie,
  FaBlog,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import LanguageToggle from "../LanguageToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onItemClick: (itemId: string) => void;
  onClose: () => void;
}

const MOBILE_MENU_ITEMS = [
  { id: "services", icon: FaBriefcase, translationKey: "servicesLabel" },
  { id: "projects", icon: FaProjectDiagram, translationKey: "projectsLabel" },
  { id: "experience", icon: FaUserTie, translationKey: "experiencesLabel" },
  { id: "blog", icon: FaBlog, translationKey: "blog" },
  { id: "contact", icon: FaEnvelope, translationKey: "contact" },
  { id: "cv", icon: FaFileDownload, translationKey: "downloadResume" },
];

export function MobileMenu({ isOpen, onItemClick, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden fixed inset-0 z-[150] bg-[#0d1220]/95 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-center h-full w-full p-8 gap-6">
            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-4 w-full max-w-xs">
              {MOBILE_MENU_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleItemClick(item.id)}
                    className="w-full flex items-center gap-4 p-4 rounded-lg bg-[#202c32]/40 backdrop-blur-sm border border-white/10 text-white hover:bg-[#202c32]/60 transition-colors"
                  >
                    <Icon size={24} className="text-[#2C854C]" />
                    <span className="text-lg font-body">
                      {t(item.translationKey)}
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Language Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: MOBILE_MENU_ITEMS.length * 0.1 }}
              className="mt-8"
            >
              <LanguageToggle />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
