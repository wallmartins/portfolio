import dynamic from "next/dynamic";
import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

const About = dynamic(() => import("@/components/About"));
const ModalManager = dynamic(() => import("@/components/Modal/ModalManager"));
const MobileModalManagerWrapper = dynamic(
  () => import("@/components/Modal/MobileModalManager").then((mod) => ({ default: mod.MobileModalManagerWrapper }))
);

export const metadata: Metadata = generateSEOMetadata({
  title: "Wallace Martins | Senior Software Engineer",
  description:
    "Desenvolvedor fullstack especializado em React, TypeScript, IA e soluções web escaláveis. Transformando ideias em realidades digitais.",
  tags: [
    "desenvolvedor",
    "engenheiro de software",
    "frontend",
    "fullstack",
    "web development",
    "React",
    "TypeScript",
    "IA",
    "AI integration",
  ],
});

export default function Home() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wallace Martins - Portfolio",
    description:
      "Portfolio de Wallace Martins, Senior Software Engineer com especialização em desenvolvimento web, IA e soluções escaláveis.",
    hasPart: [
      {
        "@type": "Service",
        name: "Web Development",
        description: "Desenvolvimento de websites e aplicações rápidas e responsivas",
        provider: {
          "@type": "Person",
          name: "Wallace Martins",
        },
      },
      {
        "@type": "Service",
        name: "AI Integration",
        description: "Integração de IA (OpenAI, Google, Hugging Face) em aplicações",
        provider: {
          "@type": "Person",
          name: "Wallace Martins",
        },
      },
      {
        "@type": "Service",
        name: "Full Stack Development",
        description: "Desenvolvimento completo de stack (frontend, backend, banco de dados)",
        provider: {
          "@type": "Person",
          name: "Wallace Martins",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Desktop ModalManager */}
      <div className="hidden lg:block">
        <ModalManager />
        <About />
      </div>

      {/* Mobile Components */}
      <div className="lg:hidden">
        <MobileModalManagerWrapper />
      </div>
    </>
  );
}
