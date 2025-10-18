"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import ServicesModalContent from "./ModalContent/Services/ServicesModalContent";
import ProjectsModalContent from "./ModalContent/Projects/ProjectsModalContent";
import BlogModalContent from "./ModalContent/Blog/BlogModalContent";
import ContactModalContent from "./ModalContent/Contact/ContactModalContent";
import ExperienceModalContent from "./ModalContent/Experiences/ExperienceModalContent";
import DownloadCV from "../DownloadCV";
import About from "../About";

type ModalType =
  | "about"
  | "services"
  | "projects"
  | "experience"
  | "blog"
  | "contact"
  | "cv";

interface MobileModalManagerProps {
  currentModal: ModalType;
}

const MODAL_CONTENT: Record<ModalType, ReactElement> = {
  about: <About />,
  services: <ServicesModalContent />,
  projects: <ProjectsModalContent />,
  experience: <ExperienceModalContent />,
  blog: <BlogModalContent />,
  contact: <ContactModalContent />,
  cv: <DownloadCV />,
};

export function MobileModalManager({ currentModal }: MobileModalManagerProps) {
  const currentContent = MODAL_CONTENT[currentModal];

  return (
    <div className="lg:hidden fixed inset-0 z-40 pt-16 pb-20 overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentModal}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full flex flex-col pointer-events-auto"
        >
          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-[#181d2c] scrollbar-track-transparent">
            {currentContent}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
