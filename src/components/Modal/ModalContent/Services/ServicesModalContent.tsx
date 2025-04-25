import React from "react";

import { FaLaptopCode, FaPuzzlePiece } from "react-icons/fa";
import { FiTarget, FiTool } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { HiOutlineLockClosed } from "react-icons/hi";
import { TbRobot } from "react-icons/tb";
import { GiArtificialHive } from "react-icons/gi";
import { SiDialogflow } from "react-icons/si";
import { MdOutlineTextSnippet } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import { CgSmartHomeBoiler } from "react-icons/cg";
import ServicesComponents from "./ServicesComponents";

const ServicesModalContent = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Construção de sites e apps rápidos, responsivos e prontos pra qualquer dispositivo.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Landing Pages",
      description:
        "Páginas pensadas para conversão, captação de leads e performance nas campanhas.",
      icon: <FiTarget />,
    },
    {
      title: "Integração com APIs",
      description:
        "Conexão com bancos de dados, CRMs, ferramentas externas e tudo que seu sistema precisar.",
      icon: <AiOutlineApi />,
    },
    {
      title: "Design System",
      description:
        "Criação de componentes reutilizáveis com visual consistente e fácil manutenção.",
      icon: <FaPuzzlePiece />,
    },
    {
      title: "Performance e SEO",
      description:
        "Otimizações que garantem velocidade de carregamento e destaque nos buscadores.",
      icon: <RiBarChartBoxLine />,
    },
    {
      title: "Autenticação e Segurança",
      description:
        "Login, cadastro e controle de acesso com foco em usabilidade e proteção de dados.",
      icon: <HiOutlineLockClosed />,
    },
    {
      title: "Chatbots e Automação",
      description:
        "Integrações com bots, WhatsApp e soluções que agilizam a comunicação com clientes.",
      icon: <TbRobot />,
    },
    {
      title: "Refatoração de Código",
      description:
        "Melhoria de sistemas existentes com foco em performance, legibilidade e escalabilidade.",
      icon: <FiTool />,
    },
    {
      title: "Integração com IA",
      description:
        "Uso de APIs como OpenAI, Google e Hugging Face para adicionar inteligência ao seu sistema.",
      icon: <GiArtificialHive />,
    },
    {
      title: "Chatbots Inteligentes",
      description:
        "Criação de bots que entendem contexto, respondem com naturalidade e economizam tempo da sua equipe.",
      icon: <SiDialogflow />,
    },
    {
      title: "Conteúdo Automatizado",
      description:
        "Textos, descrições, resumos e respostas automáticas criados com IA.",
      icon: <MdOutlineTextSnippet />,
    },
    {
      title: "Busca Inteligente com IA",
      description:
        "Resultados mais relevantes com interpretação de linguagem natural.",
      icon: <BiSearchAlt2 />,
    },
    {
      title: "Data Management",
      description:
        "Categorize e organize informações com inteligência artificial.",
      icon: <VscFolderLibrary />,
    },
    {
      title: "IA para Negócios",
      description:
        "Soluções com IA generativa e machine learning adaptadas para sua necessidade.",
      icon: <CgSmartHomeBoiler />,
    },
  ];

  return (
    <div className="w-2xl grid grid-cols-2 overflow-y-scroll custom-scrollbar">
      {services.map((service, index) => (
        <ServicesComponents
          key={`servicesComponent-${index}`}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesModalContent;
