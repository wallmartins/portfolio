"use client";

import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { useTranslation } from "react-i18next";
import { redirect } from "next/navigation";

interface Project {
  title: string;
  subtitle: string;
  gif?: string;
  challenges: string[];
  goals: string[];
  results: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  role?: string;
}

interface ProjectDetailProps {
  project: Project;
}

interface ProjectDetailPropsWithTitle extends ProjectDetailProps {
  showTitle?: boolean;
}

export default function ProjectDetail({ project, showTitle = false }: ProjectDetailPropsWithTitle) {
  return (
    <div className="flex flex-col gap-4">
      {showTitle && (
        <p className="font-button text-[#c0cbcd] text-left text-sm mb-4 drag-handle cursor-grab active:cursor-grabbing">
          {project.title}
        </p>
      )}
      <div className="bg-[rgb(9,1,13)] p-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
        <div className="bg-[rgb(9,1,13)] p-4 pt-0 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
          <div className="flex flex-col gap-4">
            <div className="relative">
              {project.gif && (
                <Image
                  src={project.gif}
                  width={400}
                  height={225}
                  alt={`Demonstração do projeto ${project.title}`}
                  className="rounded-sm shadow-md w-full"
                  unoptimized={true}
                />
              )}
            </div>

            {/* Grid de Informações */}
            <div className="grid gap-4">
              {/* Tecnologias */}
              <div>
                <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
                  Tecnologias utilizadas
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-[#0d1220] text-[#99a2a4] px-2 py-1 rounded text-xs border border-white/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Desafios */}
              <div>
                <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
                  Desafios
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="font-body text-[#99a2a4]">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metas & Resultados */}
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
                    Metas
                  </h3>
                  <ul className="space-y-2">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="font-body text-[#99a2a4]">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-title text-[#c0cbcd] text-xl uppercase mb-2">
                    Resultados
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="font-body text-[#99a2a4]">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectDetailWrapperProps {
  slug: string;
  showTitle?: boolean;
}

export function ProjectDetailWrapper({ slug, showTitle = false }: ProjectDetailWrapperProps) {
  const { t } = useTranslation();

  const project = t(slug, {
    returnObjects: true,
    ns: "projects",
  }) as Project;

  if (!project || !project.title) {
    redirect("/");
  }

  return <ProjectDetail project={project} showTitle={showTitle} />;
}
