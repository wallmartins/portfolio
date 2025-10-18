import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blog";

const BlogModalContent = () => {
  const { t } = useTranslation("blog");

  return (
    <div className="w-full lg:w-2xl h-auto lg:h-[512px] overflow-y-scroll custom-scrollbar px-2 lg:px-0">
      {blogPosts.map((post, index) => {
        const translatedPost = t(post.title, { returnObjects: true }) as {
          title: string;
          subtitle: string;
        };

        return (
          <BlogCard
            key={`blogComponent-${index}`}
            title={translatedPost.title}
            description={translatedPost.subtitle}
            tags={post.tags}
            postLink={post.slug}
          />
        );
      })}
    </div>
  );
};

export default BlogModalContent;
