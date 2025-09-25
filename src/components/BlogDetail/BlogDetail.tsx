import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/lib/MDXComponent";

interface BlogDetailProps {
  content: string;
}

const BlogDetail = ({ content }: BlogDetailProps) => {
  return <MDXRemote source={content} components={components} />;
};

export default BlogDetail;
