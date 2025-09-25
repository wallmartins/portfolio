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
      "Revolucionando code review com integração GitHub, Jira e Inteligência Artificial",
    gif: "/pr-ai-gif.gif",
    challenges: [
      "Em nosso processo de desenvolvimento, percebemos um grande obstáculo: as descrições de Pull Requests eram superficiais e incompletas. " +
        "Isso fazia com que revisores e QA analisassem alterações praticamente às cegas, sem clareza sobre o que estava sendo entregue. " +
        "O resultado? Brechas, retrabalho e um code review pouco eficiente.",
      "Era necessário encontrar uma forma de elevar a qualidade do processo de revisão sem aumentar a carga sobre os desenvolvedores. " +
        "Três grandes desafios ficaram evidentes:",
      "• Contextualizar cada PR com informações confiáveis vindas do Jira e do GitHub",
      "• Criar um fluxo rápido e intuitivo para desenvolvedores, sem burocracia",
      "• Garantir descrições consistentes mesmo em PRs complexos ou extensos",
    ],
    goals: [
      "A meta era clara: transformar o code review em um processo mais transparente, seguro e eficiente. " +
        "Queríamos garantir que tanto revisores quanto QA tivessem todas as informações necessárias desde o início, " +
        "sem depender de descrições manuais e falhas.",
      "Para alcançar isso, definimos quatro objetivos principais:",
      "• Automatizar a geração de PRs completos — com título, motivação, alterações realizadas, impacto e recomendações",
      "• Integrar Jira e GitHub para oferecer rastreabilidade total de tasks e branches",
      "• Reduzir erros e brechas no processo de revisão, aumentando a confiabilidade",
      "• Otimizar o tempo dos desenvolvedores, eliminando tarefas repetitivas e burocráticas",
    ],
    results: [
      "O impacto do Automatizador de PRs com IA foi transformador. " +
        "Com ele, os revisores deixaram de trabalhar às cegas e passaram a ter uma visão clara e detalhada de cada entrega. " +
        "O QA ganhou contexto desde o início, e os desenvolvedores economizaram tempo precioso.",
      "Os principais resultados alcançados foram:",
      "• ✅ PRs detalhados gerados automaticamente em segundos",
      "• ✅ Revisões mais rápidas, claras e seguras",
      "• ✅ Redução de retrabalho e falhas de comunicação entre times",
      "• ✅ Economia de tempo significativa para desenvolvedores, que puderam focar em entregar valor real ao produto",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
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
    </div>
  );
}
