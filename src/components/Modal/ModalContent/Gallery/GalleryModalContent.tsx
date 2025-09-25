import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryModalContent = () => {
  const images = [
    { src: "/gallery/1.jpg", alt: "Imagem 1" },
    { src: "/gallery/2.jpg", alt: "Imagem 2" },
    { src: "/gallery/3.jpg", alt: "Imagem 3" },
  ];

  return (
    <div className="w-fit h-fit overflow-y-scroll custom-scrollbar">
      <GalleryCard images={images} />
    </div>
  );
};

export default GalleryModalContent;
