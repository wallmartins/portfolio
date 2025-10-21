"use client";

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
    <div className="flex flex-col lg:flex-row items-start lg:items-center border-b-2 border-b-[#181d2c] pb-3 pt-3 first:pt-0 last:border-0 gap-3">
      {/* Image Section */}
      <Link
        href={`/projects/${projectLink}`}
        className="w-full lg:w-32 h-48 lg:h-24 flex-shrink-0"
        prefetch={true}
      >
        <img
          className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
          src={imageUrl}
          alt={title}
        />
      </Link>

      {/* Content Section */}
      <div className="flex-1 w-full lg:p-4 lg:pr-3">
        <Link
          href={`/projects/${projectLink}`}
          className="group"
          prefetch={true}
        >
          <div className="flex items-center gap-2 mb-1 relative">
            <h3 className="text-[#c0cbcd] font-title text-base lg:text-lg group-hover:text-[#fff] transition-colors">
              {title}
            </h3>
            {/* Arrow Icon - Mobile inline with title */}
            <div className="lg:hidden w-5 h-5 flex items-center justify-center">
              <FiArrowRight
                className="text-[#c0cbcd] group-hover:text-[#fff] transition-colors absolute"
                size={20}
              />
            </div>
          </div>
        </Link>
        <p className="text-gray-400 text-xs lg:text-sm font-body leading-relaxed mb-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#181d2c]/50 text-[#73797b] font-button font-medium px-2 lg:px-3 py-0.5 lg:py-1 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Arrow Icon - Desktop as button */}
      <Link
        className="hidden lg:block bg-[#181d2c]/50 w-fit h-fit p-3 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg opacity-55 hover:opacity-100 transition-opacity group"
        href={`/projects/${projectLink}`}
        prefetch={true}
      >
        <FiArrowRight
          className="text-[#c0cbcd] group-hover:text-[#fff] group-hover:translate-x-1 transition-all duration-200"
          size={18}
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
