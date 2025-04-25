import React from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

interface IModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  side: "left" | "right";
}

const Modal = ({ title, children, onClose, side }: IModalProps) => {
  const positionClass = side === "right" ? "right-4" : "left-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${positionClass} absolute w-fit h-fit bg-[#0d1220]/50 hover:bg-[#181d2c]/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-500 ease-in-out shadow-md rounded-lg z-50 p-4 drag-handle cursor-grab`}
    >
      <div className="flex flex-1 items-center justify-between">
        <p className="font-button text-[#c0cbcd] text-left text-sm">{title}</p>
        <button
          className="text-[#c0cbcd] border-[#0d1220] hover:text-[#99a2a4] hover:border-1 hover:border-white/20 hover:shadow-xs hover:rounded-xs transition ease-in cursor-pointer h-fit"
          onClick={onClose}
        >
          <IoIosClose />
        </button>
      </div>
      <div className="bg-[rgb(9,1,13)] h-[512px] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg flex flex-col gap-4 overflow-y-scroll custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
