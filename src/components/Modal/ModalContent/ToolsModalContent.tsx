import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const tools = [
    {
      icon: SiJavascript,
      name: "JavaScript",
      purpose: t("toolsCategories.webProgrammingLanguage"),
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      purpose: t("toolsCategories.typedJavaScript"),
      link: "https://www.typescriptlang.org",
    },
    {
      icon: SiReact,
      name: "React",
      purpose: t("toolsCategories.frontendLibrary"),
      link: "https://reactjs.org",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      purpose: t("toolsCategories.reactFramework"),
      link: "https://nextjs.org",
    },
    {
      icon: SiVuedotjs,
      name: "Vue.js",
      purpose: t("toolsCategories.frontendFramework"),
      link: "https://vuejs.org",
    },
    {
      icon: SiNuxtdotjs,
      name: "Nuxt.js",
      purpose: t("toolsCategories.vueFramework"),
      link: "https://nuxt.com",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      purpose: t("toolsCategories.utilityFirstCss"),
      link: "https://tailwindcss.com",
    },
    {
      icon: SiVite,
      name: "Vite",
      purpose: t("toolsCategories.frontendBuildTool"),
      link: "https://vitejs.dev",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      purpose: t("toolsCategories.backendRuntime"),
      link: "https://nodejs.org",
    },
    {
      icon: SiExpress,
      name: "Express.js",
      purpose: t("toolsCategories.backendFramework"),
      link: "https://expressjs.com",
    },
    {
      icon: SiNestjs,
      name: "NestJS",
      purpose: t("toolsCategories.backendFramework"),
      link: "https://nestjs.com",
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      purpose: t("toolsCategories.relationalDatabase"),
      link: "https://www.postgresql.org",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      purpose: t("toolsCategories.noSqlDatabase"),
      link: "https://www.mongodb.com",
    },
    {
      icon: SiPrisma,
      name: "Prisma ORM",
      purpose: t("toolsCategories.databaseOrm"),
      link: "https://www.prisma.io",
    },
    {
      icon: SiSupabase,
      name: "Supabase",
      purpose: t("toolsCategories.realtimeBackend"),
      link: "https://supabase.com",
    },
    {
      icon: SiGraphql,
      name: "GraphQL",
      purpose: t("toolsCategories.apiQueryLanguage"),
      link: "https://graphql.org",
    },
    {
      icon: SiDocker,
      name: "Docker",
      purpose: t("toolsCategories.containerization"),
      link: "https://www.docker.com",
    },
    {
      icon: SiOpenai,
      name: "OpenAI",
      purpose: t("toolsCategories.aiApiProvider"),
      link: "https://openai.com",
    },
    {
      icon: SiLangchain,
      name: "LangChain",
      purpose: t("toolsCategories.aiTooling"),
      link: "https://www.langchain.com",
    },
    {
      icon: SiVercel,
      name: "Vercel",
      purpose: t("toolsCategories.deploymentPlatform"),
      link: "https://vercel.com",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      purpose: t("toolsCategories.deploymentPlatform"),
      link: "https://www.netlify.com",
    },
    {
      icon: SiGithub,
      name: "GitHub",
      purpose: t("toolsCategories.versionControl"),
      link: "https://github.com",
    },
    {
      icon: SiFigma,
      name: "Figma",
      purpose: t("toolsCategories.designTool"),
      link: "https://figma.com",
    },
  ];

  return (
    <div className="w-[280px] h-[512px] space-y-2 overflow-y-scroll custom-scrollbar">
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
