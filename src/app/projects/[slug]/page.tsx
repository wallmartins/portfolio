import dynamic from "next/dynamic";
import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

const DraggableWrapper = dynamic(() => import("@/components/Draggable/DraggableWrapper"));
const ModalManager = dynamic(() => import("@/components/Modal/ModalManager"));
const ProjectDetailWrapper = dynamic(
  () => import("@/components/ProjectDetail/ProjectDetail").then((mod) => ({ default: mod.ProjectDetailWrapper }))
);

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const projectMetadata: Record<string, { title: string; description: string; tags: string[] }> = {
  "pr-ai-assistant": {
    title: "Automatizador de PRs com IA",
    description:
      "Revolucionando code review com integração GitHub, Jira e Inteligência Artificial. Sistema que automatiza a geração de descrições de pull requests detalhadas.",
    tags: ["IA", "GitHub", "Jira", "Automação", "React", "Node.js", "TypeScript"],
  },
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMetadata[slug];

  if (!project) {
    return {};
  }

  return generateSEOMetadata({
    title: project.title,
    description: project.description,
    slug: `/projects/${slug}`,
    type: "website",
    tags: project.tags,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://wallacemartins.dev";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: projectMetadata[slug]?.title || "Project",
    description: projectMetadata[slug]?.description || "",
    creator: {
      "@type": "Person",
      name: "Wallace Martins",
      url: BASE_URL,
    },
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "0",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ModalManager />

      {/* Mobile Layout */}
      <div className="lg:hidden fixed inset-0 z-40 pt-16 pb-20 overflow-hidden">
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 pt-4 scrollbar-thin scrollbar-thumb-[#181d2c] scrollbar-track-transparent">
            <ProjectDetailWrapper slug={slug} showTitle={false} />
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
          <ProjectDetailWrapper slug={slug} showTitle={true} />
        </div>
      </DraggableWrapper>
    </>
  );
}
