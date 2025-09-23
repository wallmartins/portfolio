"use client";

import Image from "next/image";
import React from "react";
import DraggableWrapper from "./Draggable/DraggableWrapper";

const About = () => {
  return (
    <DraggableWrapper initialX={"45%"} initialY={110}>
      <div className="w-lg h-fit bg-[#0d1220]/50 hover:bg-[#181d2c]/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-500 ease-in-out shadow-md rounded-lg z-50 p-4 drag-handle cursor-grab">
        <p className="font-button text-[#c0cbcd] text-left text-sm">About</p>
        <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg flex flex-col gap-4">
          <Image
            src="/about.jpg"
            width={450}
            height={450}
            alt="Foto de Wallace Martins em um estilo de desenho cyberpunk"
            priority
            className="rounded-sm shadow-md"
          />
          <h2 className="font-title text-2xl text-[#c0cbcd]">
            Codificando Realidades Digitais que Revolucionam
          </h2>
          <p className="font-body text-sm text-[#99a2a4] text-justify">
            Sou um desenvolvedor especializado em transformar ideias em
            experiências digitais que unem elegância e impacto real - com código
            limpo, interfaces intuitivas e uma obsessão por detalhes. Crio
            soluções que não apenas funcionam perfeitamente, mas encantam
            usuários e impulsionam resultados de negócios, porque acredito que a
            verdadeira excelência técnica está em entregar produtos que são tão
            funcionais quanto memoráveis.
          </p>
        </div>
      </div>
    </DraggableWrapper>
  );
};

export default About;
