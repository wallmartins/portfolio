import About from "@/components/About";
import ModalManager from "@/components/Modal/ModalManager";

export default function Home() {
  return (
    <div className="p-13 pb-20 font-[family-name:var(--font-geist-sans)] text-white relative">
      <ModalManager />
      <About />
    </div>
  );
}
