import React from "react";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiOpenai,
  SiLangchain,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
import { TbArrowUpRight } from "react-icons/tb";

const ToolsModalContent = () => {
  const tools = [
    // Base Language
    {
      icon: SiJavascript,
      name: "JavaScript",
      purpose: "Web Programming Language",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      purpose: "Typed JavaScript",
      link: "https://www.typescriptlang.org",
    },

    // Frontend Core
    {
      icon: SiReact,
      name: "React",
      purpose: "Frontend Library",
      link: "https://reactjs.org",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      purpose: "React Framework",
      link: "https://nextjs.org",
    },
    {
      icon: SiVuedotjs,
      name: "Vue.js",
      purpose: "Frontend Framework",
      link: "https://vuejs.org",
    },
    {
      icon: SiNuxtdotjs,
      name: "Nuxt.js",
      purpose: "Vue Framework",
      link: "https://nuxt.com",
    },

    // Styling e Build Tools
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      purpose: "Utility-First CSS",
      link: "https://tailwindcss.com",
    },
    {
      icon: SiVite,
      name: "Vite",
      purpose: "Frontend Build Tool",
      link: "https://vitejs.dev",
    },

    // Backend Core
    {
      icon: SiNodedotjs,
      name: "Node.js",
      purpose: "Backend Runtime",
      link: "https://nodejs.org",
    },
    {
      icon: SiExpress,
      name: "Express.js",
      purpose: "Backend Framework",
      link: "https://expressjs.com",
    },
    {
      icon: SiNestjs,
      name: "NestJS",
      purpose: "Backend Framework",
      link: "https://nestjs.com",
    },

    // Databases & ORMs
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      purpose: "Relational Database",
      link: "https://www.postgresql.org",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      purpose: "NoSQL Database",
      link: "https://www.mongodb.com",
    },
    {
      icon: SiPrisma,
      name: "Prisma ORM",
      purpose: "Database ORM",
      link: "https://www.prisma.io",
    },
    {
      icon: SiSupabase,
      name: "Supabase",
      purpose: "Realtime Backend",
      link: "https://supabase.com",
    },

    // APIs & Infra
    {
      icon: SiGraphql,
      name: "GraphQL",
      purpose: "API Query Language",
      link: "https://graphql.org",
    },
    {
      icon: SiDocker,
      name: "Docker",
      purpose: "Containerization",
      link: "https://www.docker.com",
    },

    // AI Tools
    {
      icon: SiOpenai,
      name: "OpenAI",
      purpose: "AI API Provider",
      link: "https://openai.com",
    },
    {
      icon: SiLangchain,
      name: "LangChain",
      purpose: "AI Tooling",
      link: "https://www.langchain.com",
    },

    // Deployment
    {
      icon: SiVercel,
      name: "Vercel",
      purpose: "Deployment Platform",
      link: "https://vercel.com",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      purpose: "Deployment Platform",
      link: "https://www.netlify.com",
    },

    // Versioning e Design
    {
      icon: SiGithub,
      name: "GitHub",
      purpose: "Version Control",
      link: "https://github.com",
    },
    {
      icon: SiFigma,
      name: "Figma",
      purpose: "Design Tool",
      link: "https://figma.com",
    },
  ];

  return (
    <div className="w-[280px] space-y-2 overflow-y-scroll custom-scrollbar">
      {tools.map((tool, index) => (
        <a
          key={`tools-${index}`}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl bg-[rgb(9,1,13)] px-4 py-3 hover:bg-[#181d2c] transition"
        >
          <div className="flex items-center gap-4">
            <tool.icon className="text-2xl text-gray-700 dark:text-gray-300" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-white">
                {tool.name}
              </span>
              <span className="text-xs text-gray-400">{tool.purpose}</span>
            </div>
          </div>
          <TbArrowUpRight className="text-sm text-gray-500" />
        </a>
      ))}
    </div>
  );
};

export default ToolsModalContent;
