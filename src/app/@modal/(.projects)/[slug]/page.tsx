"use client";

import Modal from "@/components/Modal/Modal";
import ProjectDetail from "@/components/ProjectDetail/ProjectDetail";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

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

interface ProjectsData {
  [key: string]: Project;
}

const projectsData: ProjectsData = {
  "landing-page-nestle": {
    title: "Landing Page Nestlé",
    subtitle: "Uma experiência digital moderna para aumentar engajamento",
    gif: "/gifs/nestle-demo.gif",
    challenges: [
      "Interface moderna que represente a marca",
      "Otimização de performance",
    ],
    goals: ["Aumentar conversão em 25%", "Reduzir taxa de rejeição"],
    results: ["✅ Conversão +32%", "✅ Performance score 98"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
};

export default function ProjectModal({ params }: ProjectModalProps) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setProject(projectsData[resolvedParams.slug] || null);
    });
  }, [params]);

  if (!project) return null;

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal title={project.title} onClose={handleClose} side="right">
      <ProjectDetail project={project} />
    </Modal>
  );
}
