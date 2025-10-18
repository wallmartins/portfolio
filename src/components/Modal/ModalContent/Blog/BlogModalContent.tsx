import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blog";

const BlogModalContent = () => {
  const { t } = useTranslation("blog");

  return (
    <div className="w-2xl h-[512px] overflow-y-scroll custom-scrollbar">
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
