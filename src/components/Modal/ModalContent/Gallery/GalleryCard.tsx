"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper-custom.css";

type GalleryCardProps = {
  images: { src: string; alt: string }[];
};

export default function GalleryCard({ images }: GalleryCardProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        className="rounded-2xl h-128 custom-gallery"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center h-full relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />

              {/* Overlay gradient sutil para tema dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
