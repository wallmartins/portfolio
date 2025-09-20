"use client";

import React, { useState } from "react";
import Modal from "./Modal";

// CONTENT
import ServicesModalContent from "./ModalContent/Services/ServicesModalContent";
import ProjectsModalContent from "./ModalContent/ProjectsModalContent";
import BlogModalContent from "./ModalContent/BlogModalContent";
import ContactModalContent from "./ModalContent/ContactModalContent";
import ToolsModalContent from "./ModalContent/ToolsModalContent";
import MusicModalContent from "./ModalContent/MusicModalContent";
import BookModalContent from "./ModalContent/BookModalContent";
import GalleryModalContent from "./ModalContent/GalleryModalContent";

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

const ModalManager = () => {
  const sidebarItems: ISidebarItem[] = [
    {
      id: "services",
      title: "Services",
      content: <ServicesModalContent />,
      icon: <MdOutlineComputer />,
      side: "left",
    },
    {
      id: "projects",
      title: "Projects",
      content: <ProjectsModalContent />,
      icon: <FaRegFolderOpen />,
      side: "left",
    },
    {
      id: "experience",
      title: "Experiences",
      content: <ExperienceModalContent />,
      icon: <BsPersonWorkspace />,
      side: "left",
    },
    {
      id: "blog",
      title: "Blog",
      content: <BlogModalContent />,
      icon: <ImPencil2 />,
      side: "left",
    },
    {
      id: "contact",
      title: "Contact",
      content: <ContactModalContent />,
      icon: <MdAlternateEmail />,
      side: "left",
    },
    {
      id: "tools",
      title: "Tools",
      content: <ToolsModalContent />,
      icon: <GoGear />,
      side: "right",
    },
    {
      id: "music",
      title: "Music",
      content: <MusicModalContent />,
      icon: <IoMusicalNotesOutline />,
      side: "right",
    },
    {
      id: "books",
      title: "Book",
      content: <BookModalContent />,
      icon: <PiBookOpenTextThin />,
      side: "right",
    },
    {
      id: "gallery",
      title: "Gallery",
      content: <GalleryModalContent />,
      icon: <TfiGallery />,
      side: "right",
    },
    {
      id: "cv",
      title: "Download CV",
      content: <DownloadCV />,
      icon: <IoDocumentAttachOutline />,
      side: "right",
    },
  ];

  const [openModals, setOpenModals] = useState<ISidebarItem[]>([]);

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

    const modalWithPosition = { ...item, position };

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
        const offset = 80;

        const x =
          modal.side === "left"
            ? (modal.position?.left ?? 0) + offset
            : (modal.position?.right ?? 0) - offset;

        const y = modal.position?.top ?? 0;

        return (
          <DraggableWrapper key={modal.id} initialX={x} initialY={y}>
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
