"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { components } from "@/lib/MDXComponent";

interface BlogDetailProps {
  content: string;
}

const BlogDetail = ({ content }: BlogDetailProps) => {
  const [mdxSource, setMdxSource] = React.useState<MDXRemoteSerializeResult | null>(null);

  React.useEffect(() => {
    serialize(content).then(setMdxSource);
  }, [content]);

  if (!mdxSource) {
    return <div className="animate-pulse">Carregando...</div>;
  }

  return <MDXRemote {...mdxSource} components={components} />;
};

export default BlogDetail;
