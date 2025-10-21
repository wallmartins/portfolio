"use client";

import React, { useState, useEffect, useCallback } from "react";
import Modal from "./Modal";

// CONTENT
import ServicesModalContent from "./ModalContent/Services/ServicesModalContent";
import ProjectsModalContent from "./ModalContent/Projects/ProjectsModalContent";
import BlogModalContent from "./ModalContent/Blog/BlogModalContent";
import ContactModalContent from "./ModalContent/Contact/ContactModalContent";
import ToolsModalContent from "./ModalContent/ToolsModalContent";
import MusicModalContent from "./ModalContent/MusicModalContent";
import BookModalContent from "./ModalContent/BookModalContent";
import GalleryModalContent from "./ModalContent/Gallery/GalleryModalContent";

// ICONS
import { MdOutlineComputer } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiBookOpenTextThin } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoDocumentAttachOutline } from "react-icons/io5";

import Sidebar from "../Sidebars/Sidebar";
import { ISidebarItem } from "@/types/sidebar";
import DraggableWrapper from "../Draggable/DraggableWrapper";
import ExperienceModalContent from "./ModalContent/Experiences/ExperienceModalContent";
import DownloadCV from "../DownloadCV";
import { useTranslation } from "react-i18next";

// Estender a interface para incluir posição calculada
interface IModalWithPosition extends ISidebarItem {
  position?: {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
  };
  calculatedPosition?: {
    x: number;
    y: number;
  };
}

const ModalManager = () => {
  const { t } = useTranslation();
  const sidebarItems: ISidebarItem[] = [
    {
      id: "services",
      title: t("servicesLabel"),
      content: <ServicesModalContent />,
      icon: <MdOutlineComputer />,
      side: "left",
    },
    {
      id: "projects",
      title: t("projectsLabel"),
      content: <ProjectsModalContent />,
      icon: <FaRegFolderOpen />,
      side: "left",
    },
    {
      id: "experience",
      title: t("experiencesLabel"),
      content: <ExperienceModalContent />,
      icon: <BsPersonWorkspace />,
      side: "left",
    },
    {
      id: "blog",
      title: t("blog"),
      content: <BlogModalContent />,
      icon: <ImPencil2 />,
      side: "left",
    },
    {
      id: "contact",
      title: t("contact"),
      content: <ContactModalContent />,
      icon: <MdAlternateEmail />,
      side: "left",
    },
    {
      id: "tools",
      title: t("tools"),
      content: <ToolsModalContent />,
      icon: <GoGear />,
      side: "right",
    },
    {
      id: "music",
      title: t("music"),
      content: <MusicModalContent />,
      icon: <IoMusicalNotesOutline />,
      side: "right",
    },
    {
      id: "books",
      title: t("book"),
      content: <BookModalContent />,
      icon: <PiBookOpenTextThin />,
      side: "right",
    },
    {
      id: "gallery",
      title: t("gallery"),
      content: <GalleryModalContent />,
      icon: <TfiGallery />,
      side: "right",
    },
    {
      id: "cv",
      title: t("downloadResume"),
      content: <DownloadCV />,
      icon: <IoDocumentAttachOutline />,
      side: "right",
    },
  ];

  const [openModals, setOpenModals] = useState<IModalWithPosition[]>([]);

  // Função para calcular posição segura do modal
  const calculateSafePosition = useCallback((modal: IModalWithPosition) => {
    const modalWidth = 400; // Largura estimada do modal
    const modalHeight = 500; // Altura estimada do modal
    const offset = 60; // Distância entre sidebar e modal (1rem)

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x, y;

    if (modal.position) {
      // Calcular posição inicial baseada no lado da sidebar
      if (modal.side === "left") {
        // Modal à direita da sidebar esquerda
        x = (modal.position?.left ?? 0) + offset;
      } else {
        // Modal à esquerda da sidebar direita
        x = (modal.position?.right ?? 0) - offset;
      }
      y = modal.position.top;
    } else {
      // Posição padrão se não houver posição original
      x = modal.side === "left" ? 100 : viewportWidth - modalWidth - 100;
      y = 100;
    }

    if (x + modalWidth > viewportWidth && modal.side === "left") {
      x = viewportWidth - modalWidth - 20;
    }

    if (x + modalWidth > viewportWidth && modal.side === "right") {
      x = viewportWidth - modalWidth + 200;
    }

    if (x < 20) {
      x = 20;
    }

    if (y + modalHeight > viewportHeight) {
      y = viewportHeight - modalHeight - 20;
    }
    if (y < 20) {
      y = 20;
    }

    return { x, y };
  }, []);

  // Função para reposicionar todos os modais abertos
  const repositionModals = useCallback(() => {
    setOpenModals((prevModals) =>
      prevModals.map((modal) => ({
        ...modal,
        calculatedPosition: calculateSafePosition(modal),
      }))
    );
  }, [calculateSafePosition]);

  // Listener para resize da janela
  useEffect(() => {
    const handleResize = () => {
      // Debounce para evitar muitas atualizações
      const timeoutId = setTimeout(() => {
        repositionModals();
      }, 100);

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [repositionModals]);

  // Reposicionar modais quando a lista de modais abertos muda
  useEffect(() => {
    if (openModals.length > 0) {
      repositionModals();
    }
  }, [openModals.length, repositionModals]);

  const openModal = (item: ISidebarItem, element: HTMLDivElement | null) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const position = {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    };

    const modalWithPosition: IModalWithPosition = {
      ...item,
      position,
      calculatedPosition: calculateSafePosition({ ...item, position }),
    };

    setOpenModals((prev) => {
      if (prev.some((modal) => modal.id === item.id)) {
        return prev.filter((modal) => modal.id !== item.id);
      }
      return [...prev, modalWithPosition];
    });
  };

  const closeModal = (id: string) => {
    setOpenModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  return (
    <>
      <Sidebar items={sidebarItems} onItemClick={openModal} />
      {openModals.map((modal) => {
        const position =
          modal.calculatedPosition || calculateSafePosition(modal);

        return (
          <DraggableWrapper
            key={modal.id}
            initialX={position.x}
            initialY={position.y}
          >
            <Modal
              title={modal.title}
              side={modal.side}
              onClose={() => closeModal(modal.id)}
            >
              {modal.content}
            </Modal>
          </DraggableWrapper>
        );
      })}
    </>
  );
};

export default ModalManager;
