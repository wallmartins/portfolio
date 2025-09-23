import DraggableWrapper from "@/components/Draggable/DraggableWrapper";
import ModalManager from "@/components/Modal/ModalManager";
import ProjectDetail from "@/components/ProjectDetail/ProjectDetail";
import { redirect } from "next/navigation";

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
  "pr-ai-assistant": {
    title: "Automatizador de PRs com IA",
    subtitle:
      "Transformando o processo de code review com integração ao GitHub, Jira e Inteligência Artificial",
    gif: "/pr-ai-gif.gif",
    challenges: [
      "O processo de revisão de código no time apresentava falhas críticas. Descrições de PRs eram muitas vezes superficiais, " +
        "fazendo com que revisores e QA trabalhassem quase às cegas, aumentando o risco de erros e retrabalho. " +
        "O desafio era criar uma solução que melhorasse a clareza e eficiência sem sobrecarregar os desenvolvedores.",
      "Principais desafios enfrentados:",
      "• Garantir que cada PR fosse contextualizado com informações do Jira e do GitHub",
      "• Criar um fluxo simples e rápido para desenvolvedores",
      "• Manter a qualidade das descrições mesmo em PRs complexos",
    ],
    goals: [
      "A meta do projeto era clara: entregar um processo de code review mais eficiente, transparente e seguro. " +
        "O objetivo era criar uma ferramenta que automatizasse a geração de PRs detalhados e integrados.",
      "Principais objetivos:",
      "• Automatizar a criação de PRs completos (título, descrição, motivação, alterações, impacto, recomendações)",
      "• Reduzir erros e brechas no code review",
      "• Garantir que desenvolvedores gastassem menos tempo em tarefas repetitivas",
      "• Integrar de forma transparente com Jira e GitHub, mantendo contexto e rastreabilidade",
    ],
    results: [
      "O impacto do Automatizador de PRs com IA foi imediato e significativo. " +
        "Revisores e QA passaram a ter acesso a informações claras, o que aumentou a eficiência e reduziu riscos. Melhorando o processo de code review, evitando bugs antes mesmo de chegar ao ambiente.",
      "Principais resultados alcançados:",
      "• ✅ PRs gerados automaticamente com todas as informações relevantes",
      "• ✅ Revisão de código mais ágil e segura",
      "• ✅ Redução de erros e retrabalho",
      "• ✅ Economia de tempo significativa para os desenvolvedores, permitindo foco em desenvolvimento de valor",
    ],
    technologies: [
      "React",
      "Tailwind",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Express",
      "GitHub API",
      "Jira API",
      "IA (Ollama/OpenAI)",
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = projectsData[(await params).slug];

  if (!project) {
    redirect("/");
  }

  return (
    <div className="p-13 pb-20 font-[family-name:var(--font-geist-sans)] text-white relative">
      <ModalManager />
      <DraggableWrapper initialX={"45%"} initialY={110}>
        <div className="w-lg h-fit bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-4">
          <p className="font-button text-[#c0cbcd] text-left text-sm">
            {project.title}
          </p>
          <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
            <ProjectDetail project={project} />
          </div>
        </div>
      </DraggableWrapper>
    </div>
  );
}
