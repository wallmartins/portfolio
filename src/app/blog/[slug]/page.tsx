import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const ModalManager = dynamic(() => import("@/components/Modal/ModalManager"));
const DraggableWrapper = dynamic(() => import("@/components/Draggable/DraggableWrapper"));
const BlogDetailWrapper = dynamic(
  () => import("@/components/BlogDetail/BlogDetail").then((mod) => ({ default: mod.BlogDetailWrapper }))
);

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <>
      <ModalManager />

      {/* Mobile Layout */}
      <div className="lg:hidden fixed inset-0 z-40 pt-16 pb-20 overflow-hidden">
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 pt-4 scrollbar-thin scrollbar-thumb-[#181d2c] scrollbar-track-transparent">
            <div className="bg-[rgb(9,1,13)] p-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
              <BlogDetailWrapper postContentKey={post.content} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <DraggableWrapper
        centered
        responsive
        widthPercentage={90}
        heightPercentage={80}
        maxWidth={896}
        minHeight={600}
      >
        <div className="hidden lg:block w-full h-full bg-[#0d1220]/50 backdrop-blur-sm border border-white/5 shadow-md rounded-lg z-50 p-4 overflow-y-scroll custom-scrollbar">
          <p className="font-button text-[#c0cbcd] text-left text-sm mb-4 drag-handle cursor-grab active:cursor-grabbing">
            {post.title}
          </p>
          <div className="bg-[rgb(9,1,13)] p-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg">
            <BlogDetailWrapper postContentKey={post.content} />
          </div>
        </div>
      </DraggableWrapper>
    </>
  );
}
