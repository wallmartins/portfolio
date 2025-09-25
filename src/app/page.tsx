import About from "@/components/About";
import Menu from "@/components/Menu/Menu";
import ModalManager from "@/components/Modal/ModalManager";

export default function Home() {
  return (
    <div className="p-13 pb-20 text-white relative">
      <ModalManager />
      <About />
      <Menu />
    </div>
  );
}
