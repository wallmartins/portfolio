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
