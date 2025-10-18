import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.webDevelopment.title"),
      description: t("services.webDevelopment.description"),
      icon: <FaLaptopCode />,
    },
    {
      title: t("services.landingPages.title"),
      description: t("services.landingPages.description"),
      icon: <FiTarget />,
    },
    {
      title: t("services.apiIntegration.title"),
      description: t("services.apiIntegration.description"),
      icon: <AiOutlineApi />,
    },
    {
      title: t("services.designSystem.title"),
      description: t("services.designSystem.description"),
      icon: <FaPuzzlePiece />,
    },
    {
      title: t("services.performanceSeo.title"),
      description: t("services.performanceSeo.description"),
      icon: <RiBarChartBoxLine />,
    },
    {
      title: t("services.authSecurity.title"),
      description: t("services.authSecurity.description"),
      icon: <HiOutlineLockClosed />,
    },
    {
      title: t("services.chatbotsAutomation.title"),
      description: t("services.chatbotsAutomation.description"),
      icon: <TbRobot />,
    },
    {
      title: t("services.codeRefactoring.title"),
      description: t("services.codeRefactoring.description"),
      icon: <FiTool />,
    },
    {
      title: t("services.aiIntegration.title"),
      description: t("services.aiIntegration.description"),
      icon: <GiArtificialHive />,
    },
    {
      title: t("services.smartChatbots.title"),
      description: t("services.smartChatbots.description"),
      icon: <SiDialogflow />,
    },
    {
      title: t("services.automatedContent.title"),
      description: t("services.automatedContent.description"),
      icon: <MdOutlineTextSnippet />,
    },
    {
      title: t("services.smartSearch.title"),
      description: t("services.smartSearch.description"),
      icon: <BiSearchAlt2 />,
    },
    {
      title: t("services.dataManagement.title"),
      description: t("services.dataManagement.description"),
      icon: <VscFolderLibrary />,
    },
    {
      title: t("services.businessAi.title"),
      description: t("services.businessAi.description"),
      icon: <CgSmartHomeBoiler />,
    },
  ];

  return (
    <div className="w-full lg:w-2xl h-auto lg:h-[512px] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-y-scroll custom-scrollbar px-2 lg:px-0">
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
