import { Badge } from "@/components/Badge/Badge";
import { ProjectCardProps } from "@/types/project";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  projectLink,
}) => {
  return (
    <div className="flex items-center cursor-pointer border-b-2 border-b-[#181d2c] pb-1 pt-1 first:pt-0 last:border-0">
      {/* Image Section */}
      <div className="w-32 h-24 flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 pr-3">
        <h3 className="text-white font-title text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm font-body leading-relaxed mb-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
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

      {/* Arrow Icon */}
      <Link
        className="bg-[#181d2c]/50 w-fit h-fit p-3 mt-2 mb-2 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg opacity-55 hover:opacity-100 first:mt-0 nth-[2]:mt-0"
        href={`/projects/${projectLink}`}
      >
        <FiArrowRight
          className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
          size={20}
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
