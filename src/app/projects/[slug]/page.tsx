"use client";

import DraggableWrapper from "@/components/Draggable/DraggableWrapper";
import Menu from "@/components/Menu/Menu";
import ModalManager from "@/components/Modal/ModalManager";
import ProjectDetail from "@/components/ProjectDetail/ProjectDetail";
import { redirect, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  subtitle: string;
  gif: string;
  challenges: string[];
  goals: string[];
  results: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  role?: string;
}

export default function ProjectPage() {
  const params = useParams();
  const { t } = useTranslation();
  const slug = params.slug as string;

  const project = t(slug, {
    returnObjects: true,
    ns: "projects",
  }) as Project;

  if (!project || !project.title) {
    redirect("/");
  }

  return (
    <div className="p-13 pb-20 font-[family-name:var(--font-geist-sans)] text-white relative">
      <ModalManager />
      <DraggableWrapper
        centered
        responsive
        widthPercentage={90}
        heightPercentage={80}
        maxWidth={896}
        minHeight={600}
      >
        <div className="w-full h-full bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-4 overflow-y-scroll custom-scrollbar">
          <p className="font-button text-[#c0cbcd] text-left text-sm">
            {project.title}
          </p>
          <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
            <div className="bg-[rgb(9,1,13)] p-4 pt-0 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
              <ProjectDetail project={project} />
            </div>
          </div>
        </div>
      </DraggableWrapper>
      <Menu />
    </div>
  );
}
