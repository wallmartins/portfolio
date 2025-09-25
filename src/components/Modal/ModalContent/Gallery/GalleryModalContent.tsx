import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryModalContent = () => {
  const images = [
    { src: "/gallery/1.jpg", alt: "Imagem 1" },
    { src: "/gallery/2.jpg", alt: "Imagem 2" },
    { src: "/gallery/3.jpg", alt: "Imagem 3" },
    { src: "/gallery/4.jpg", alt: "Imagem 4" },
    { src: "/gallery/5.jpg", alt: "Imagem 5" },
    { src: "/gallery/6.jpg", alt: "Imagem 6" },
    { src: "/gallery/7.jpg", alt: "Imagem 7" },
    { src: "/gallery/8.jpg", alt: "Imagem 8" },
    { src: "/gallery/9.jpg", alt: "Imagem 9" },
    { src: "/gallery/10.jpg", alt: "Imagem 10" },
  ];

  return (
    <div className="w-fit h-fit overflow-y-scroll custom-scrollbar">
      <GalleryCard images={images} />
    </div>
  );
};

export default GalleryModalContent;
