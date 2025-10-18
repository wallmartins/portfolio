"use client";

import { blogPosts } from "@/data/blog";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import ModalManager from "@/components/Modal/ModalManager";
import DraggableWrapper from "@/components/Draggable/DraggableWrapper";
import BlogDetail from "@/components/BlogDetail/BlogDetail";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header";

export default function BlogPostPage() {
  const params = useParams();
  const { t } = useTranslation("blog");
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const translatedPost = t(post.content, { returnObjects: true }) as {
    content: string;
  };

  return (
    <>
      <Header />
      <div className="p-13 pb-20 font-[family-name:var(--font-geist-sans)] text-white relative">
        <ModalManager />
        <DraggableWrapper
          centered
          responsive
          widthPercentage={90}
          heightPercentage={80}
          maxWidth={896}
          minHeight={600}
        >
          <div className="w-full h-full bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-4 overflow-y-scroll custom-scrollbar">
            <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
              <BlogDetail content={translatedPost.content} />
            </div>
          </div>
        </DraggableWrapper>
        <Menu />
      </div>
    </>
  );
}
