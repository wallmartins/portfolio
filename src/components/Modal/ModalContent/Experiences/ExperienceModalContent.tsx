import { ExperienceCardProps } from "@/types/experience";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences: ExperienceCardProps[] = [
  {
    experienceDate: { startDate: "Abr 2025", endDate: "Atualmente" },
    jobTitle: "Engenheiro de Software Sênior",
    companyName: "Cielo",
    description: `
      • Liderei a migração e implementação de um sistema de descomissionamento, gerando economia de 5 milhões.  
      • Contribuí para a integração de um chat com IA, reduzindo em 70% os chamados de suporte.  
      • Desenvolvi um sistema de entrega automática de relatórios recorrentes, melhorando a experiência do cliente e a eficiência operacional.  
      • Aumentei a qualidade do código nos projetos, alcançando mais de 80% de cobertura.  
    `,
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
  },
  {
    experienceDate: { startDate: "Set 2024", endDate: "Jan 2025" },
    jobTitle: "Desenvolvedor Full Stack",
    companyName: "Trend Soluções em Atendimento",
    description: `
      • Desenvolvi telas de configuração para disparo de mensagens e atendimento ao cliente via Webhook e WhatsApp.  
      • Implementei a infraestrutura de backend conectando sistemas de webhook.  
      • Melhorei o dashboard com visualizações de dados avançadas.  
    `,
    techs: [
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Express",
      "CSS3",
      "NestJS",
      "Postgresql",
    ],
  },
  {
    experienceDate: { startDate: "Jun 2021", endDate: "Nov 2024" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Locaweb",
    description: `
      • Liderei o desenvolvimento frontend do sistema de campanhas no WhatsApp, aumentando o engajamento dos usuários em 30%.  
      • Desenvolvi um sistema de login flexível que solucionou problemas de registro.  
      • Otimizei desempenho, escalabilidade e tempo de carregamento.  
    `,
    techs: ["Vue.js", "JavaScript", "TypeScript", "CSS3", "Node.js"],
  },
  {
    experienceDate: { startDate: "Jan 2021", endDate: "Jun 2021" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Trampolim Project",
    description: `
      • Aumentei a visibilidade dos autores criando um site responsivo.  
      • Estruturei uma arquitetura sustentável e uma galeria de fotos.  
    `,
    techs: ["React", "JavaScript", "CSS3", "HTML"],
  },
  {
    experienceDate: { startDate: "Mai 2020", endDate: "Dez 2023" },
    jobTitle: "Desenvolvedor Front-End",
    companyName: "Porão Network",
    description: `
      • Aumentei em 60% a interação do público com uma interface de jogo integrada à Twitch.  
      • Criei experiências responsivas para web e Twitch.  
    `,
    techs: ["React", "JavaScript", "CSS3", "HTML", "Typescript"],
  },
];

const ExperienceModalContent = () => {
  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`experienceComponent-${index}`}
          experienceDate={experience.experienceDate}
          jobTitle={experience.jobTitle}
          companyName={experience.companyName}
          description={experience.description}
          techs={experience.techs}
        />
      ))}
    </>
  );
};

export default ExperienceModalContent;
