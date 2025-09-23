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
    <div className="flex flex-col gap-4 border-b-2 border-b-[#181d2c] pb-8 pt-4 first:pt-0 last:border-0">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl font-button uppercase">
              {jobTitle}
            </h3>
            <p className="text-base font-title text-[#e3e4e4] mt-1">
              {companyName}
            </p>
          </div>

          <div className="flex items-center text-xs text-[#73797b] bg-muted/50 px-3 py-1 rounded-full font-body">
            <CiCalendar className="w-4 h-4 mr-2" />
            <span>
              {experienceDate.startDate} - {experienceDate.endDate}
            </span>
          </div>
        </div>

        {location && (
          <div className="flex items-center text-[#73797b] text-xs font-body">
            <LuMapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="relative">
        <p className="text-[#e3e4e4] leading-relaxed font-body text-justify pr-2">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#181d2c]/50 text-[#73797b] font-button font-medium px-3 py-1"
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
