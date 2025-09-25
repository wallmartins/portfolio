import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogDetail {
  content: string;
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-title uppercase font-bold mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-button font-semibold mb-3 mt-6" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-medium mb-2 mt-4" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed font-body text-[#99a2a4]" {...props} />
  ),
  em: (props: any) => <em className="italic text-gray-600" {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="ml-4 font-body text-[#99a2a4]" {...props} />
  ),
  hr: (props: any) => <hr className="border-gray-300 my-8" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[#0d1220]/50 text-gray-100 p-4 rounded-lg text-sm my-4 whitespace-pre-wrap break-words"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-[#0d1220]/50 px-1.5 py-0.5 rounded text-[#f5f5f5] text-sm font-mono whitespace-pre-wrap break-words"
      {...props}
    />
  ),
};

const BlogDetail = ({ content }: BlogDetail) => {
  return <MDXRemote source={content as string} components={components} />;
};

export default BlogDetail;
