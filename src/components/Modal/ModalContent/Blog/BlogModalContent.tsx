import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blog";

const BlogModalContent = () => {
  return (
    <div className="w-2xl h-[512px] overflow-y-scroll custom-scrollbar">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={`blogComponent-${index}`}
          title={post.title}
          description={post.subtitle}
          tags={post.tags}
          postLink={post.slug}
        />
      ))}
    </div>
  );
};

export default BlogModalContent;
