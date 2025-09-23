import React from "react";
import ProjectCard from "./ProjectsCard";

const ProjectsModalContent = () => {
  const projects = [
    {
      title: "Automatizador de PRs com IA",
      description:
        "Ferramenta que integra GitHub, Jira e IA para criar descrições completas de Pull Requests automaticamente.",
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
    <div className="w-2xl h-[512px] overflow-y-scroll custom-scrollbar">
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
