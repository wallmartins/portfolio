import { Badge } from "@/components/Badge/Badge";
import { ExperienceCardProps } from "@/types/experience";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const ExperienceCard = ({
  experienceDate,
  jobTitle,
  companyName,
  description,
  location,
  techs,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 border-b-2 border-b-[#181d2c] pb-6 lg:pb-8 pt-3 lg:pt-4 first:pt-0 last:border-0">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base lg:text-xl font-button uppercase">
              {jobTitle}
            </h3>
            <p className="text-sm lg:text-base font-title text-[#e3e4e4] mt-1">
              {companyName}
            </p>
          </div>

          <div className="flex items-center text-xs text-[#73797b] bg-muted/50 px-2 lg:px-3 py-1 rounded-full font-body w-fit">
            <CiCalendar className="w-3 lg:w-4 h-3 lg:h-4 mr-1 lg:mr-2" />
            <span className="text-[10px] lg:text-xs">
              {experienceDate.startDate} - {experienceDate.endDate}
            </span>
          </div>
        </div>

        {location && (
          <div className="flex items-center text-[#73797b] text-xs font-body">
            <LuMapPin className="w-3 lg:w-4 h-3 lg:h-4 mr-1 lg:mr-2" />
            <span className="text-[10px] lg:text-xs">{location}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="relative">
        <p className="text-[#e3e4e4] leading-relaxed font-body text-justify text-xs lg:text-sm pr-0 lg:pr-2">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {techs.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#181d2c]/50 text-[#73797b] font-button font-medium px-2 lg:px-3 py-0.5 lg:py-1 text-[10px] lg:text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
