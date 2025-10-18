"use client";

import { Badge } from "@/components/Badge/Badge";
import { BlogCardProps } from "@/types/blog";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  tags,
  postLink,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center cursor-pointer border-b-2 border-b-[#181d2c] pb-3 pt-3 first:pt-0 last:border-0 gap-3">
      {/* Content Section */}
      <div className="flex-1 w-full lg:p-4 lg:pr-3">
        <h3 className="text-white font-title text-base lg:text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-xs lg:text-sm font-body leading-relaxed mb-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#181d2c]/50 text-[#73797b] font-button font-medium px-2 lg:px-3 py-0.5 lg:py-1 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Arrow Icon */}
      <Link
        className="bg-[#181d2c]/50 w-fit h-fit p-2 lg:p-3 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg opacity-55 hover:opacity-100 self-end lg:self-auto"
        href={`/blog/${postLink}`}
      >
        <FiArrowRight
          className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
          size={18}
        />
      </Link>
    </div>
  );
};

export default BlogCard;
