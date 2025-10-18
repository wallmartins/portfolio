import React from "react";
import ProjectCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const ProjectsModalContent = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.title"),
      description: t("projects.description"),
      imageUrl:
        "https://64.media.tumblr.com/6eb5079ca6116db1370c51c17828821f/46ea46fb437169f4-ad/s1280x1920/22912d4c015f25c12f774906616a09530ac101f9.pnj",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Jira API",
        "GitHub API",
      ],
      projectLink: "pr-ai-assistant",
    },
  ];
  return (
    <div className="w-full lg:w-2xl h-auto lg:h-[512px] overflow-y-scroll custom-scrollbar px-2 lg:px-0">
      {projects.map((project, index) => (
        <ProjectCard
          key={`projectComponent-${index}`}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          technologies={project.technologies}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default ProjectsModalContent;
