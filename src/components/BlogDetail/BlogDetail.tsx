"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { components } from "@/lib/MDXComponent";
import { useTranslation } from "react-i18next";

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

interface BlogDetailWrapperProps {
  postContentKey: string;
}

export function BlogDetailWrapper({ postContentKey }: BlogDetailWrapperProps) {
  const { t } = useTranslation("blog");

  const translatedPost = t(postContentKey, { returnObjects: true }) as {
    content: string;
  };

  return <BlogDetail content={translatedPost.content} />;
}

export default BlogDetail;
