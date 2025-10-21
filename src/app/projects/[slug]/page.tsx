import dynamic from "next/dynamic";

const DraggableWrapper = dynamic(() => import("@/components/Draggable/DraggableWrapper"));
const ModalManager = dynamic(() => import("@/components/Modal/ModalManager"));
const ProjectDetailWrapper = dynamic(
  () => import("@/components/ProjectDetail/ProjectDetail").then((mod) => ({ default: mod.ProjectDetailWrapper }))
);

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <>
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
