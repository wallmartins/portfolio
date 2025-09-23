import { ExperienceCardProps } from "@/types/experience";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences: ExperienceCardProps[] = [
  {
    experienceDate: { startDate: "Abr 2025", endDate: "Atualmente" },
    jobTitle: "Engenheiro de Software Sênior",
    companyName: "Cielo",
    description:
      "Na Cielo, atuei na migração e implementação de um sistema de descomissionamento que gerou economia de 5 milhões, além de contribuir para a integração de um chat com IA que reduziu em 70% os chamados de suporte. Também participei do desenvolvimento de um sistema automatizado de entrega de relatórios recorrentes, trazendo mais autonomia para os clientes, e, junto ao time, atuamos na elevação da qualidade do código a um patamar superior, com mais de 90% de cobertura em todos os projetos.",
    techs: [
      "React",
      "Styled-Components",
      "TypeScript",
      "Node.js",
      "Express",
      "Storybook",
      "Amazon Lex",
      "MongoDB",
    ],
    location: "Barueri - SP",
  },
  {
    experienceDate: { startDate: "Set 2024", endDate: "Jan 2025" },
    jobTitle: "Desenvolvedor Full Stack",
    companyName: "Trend Soluções em Atendimento",
    description:
      "Atuei no desenvolvimento de telas de configuração para disparo de mensagens e atendimento via Webhook e WhatsApp, além de implementar a infraestrutura de backend que conectava os sistemas de forma eficiente. Também contribuí para tornar os dashboards mais visuais e interativos, elevando a experiência de análise de dados para os usuários.",
    techs: [
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Express",
      "CSS3",
      "NestJS",
      "Postgresql",
    ],
    location: "Distrito Federal - Brasilia",
  },
  {
    experienceDate: { startDate: "Jun 2021", endDate: "Nov 2024" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Locaweb",
    description:
      "Fui responsável pelo frontend do sistema de campanhas no WhatsApp, que se tornou um dos carros-chefe da empresa, aumentando em 30% o engajamento dos usuários. Além disso, criei um sistema de login flexível que solucionou falhas de registro e otimizei o desempenho da plataforma, garantindo maior escalabilidade e carregamento mais rápido.",
    techs: ["Vue.js", "JavaScript", "TypeScript", "CSS3", "Node.js"],
    location: "São Paulo - SP",
  },
  {
    experienceDate: { startDate: "Jan 2021", endDate: "Jun 2021" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Trampolim Project",
    description:
      "No Trampolim Project, desenvolvi um site responsivo que aumentou a visibilidade dos autores, além de estruturar uma arquitetura sustentável e implementar uma galeria de fotos funcional e de fácil manutenção.",
    techs: ["React", "JavaScript", "CSS3", "HTML"],
    location: "São Paulo - SP",
  },
  {
    experienceDate: { startDate: "Mai 2020", endDate: "Dez 2023" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Porão Network",
    description:
      " Trabalhei no desenvolvimento de interfaces para web e Twitch, criando experiências responsivas e interativas. Um dos destaques foi a implementação de uma interface de jogo integrada à Twitch, que aumentou em 60% a interação do público com o conteúdo.",
    techs: ["React", "JavaScript", "CSS3", "HTML", "Typescript"],
    location: "São Paulo - SP",
  },
];

const ExperienceModalContent = () => {
  return (
    <div className="w-2xl h-[512px] overflow-y-scroll custom-scrollbar">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`experienceComponent-${index}`}
          experienceDate={experience.experienceDate}
          jobTitle={experience.jobTitle}
          companyName={experience.companyName}
          description={experience.description}
          techs={experience.techs}
          location={experience.location}
        />
      ))}
    </div>
  );
};

export default ExperienceModalContent;
