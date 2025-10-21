import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const ModalManager = dynamic(() => import("@/components/Modal/ModalManager"));
const MobileModalManagerWrapper = dynamic(
  () => import("@/components/Modal/MobileModalManager").then((mod) => ({ default: mod.MobileModalManagerWrapper }))
);

export default function Home() {
  return (
    <>
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
