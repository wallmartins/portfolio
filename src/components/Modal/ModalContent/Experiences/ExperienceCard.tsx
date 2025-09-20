import { ExperienceCardProps } from "@/types/experience";
import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const ExperienceCard = ({
  experienceDate,
  jobTitle,
  companyName,
  description,
  techs,
}: ExperienceCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 justify-between">
        <BsPersonWorkspace />
        <span className="text-sm text-[#c0cbcd]">
          {experienceDate.startDate} - {experienceDate.endDate}
        </span>
      </div>
      <div>
        <h3>{jobTitle}</h3>
        <p>{companyName}</p>
        <p>{description}</p>

        {techs.map((tech) => (
          <span>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
