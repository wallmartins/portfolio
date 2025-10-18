import { ExperienceCardProps } from "@/types/experience";
import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";

const ExperienceModalContent = () => {
  const { t } = useTranslation();

  const experiences = t("experiences", {
    returnObjects: true,
  }) as ExperienceCardProps[];
  return (
    <div className="w-full lg:w-2xl h-auto lg:h-[512px] overflow-y-scroll custom-scrollbar px-2 lg:px-0">
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
