"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchElements, setGlitchElements] = useState<React.ReactNode[]>([]);
  const glitchCounterRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const noiseInterval = setInterval(() => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const noise = Math.random() * 10;
          data[index] = noise;
          data[index + 1] = noise;
          data[index + 2] = noise;
          data[index + 3] = Math.random() < 0.015 ? 40 : 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }, 3000);

    const createSoftGlitch = () => {
      glitchCounterRef.current += 1;
      const glitchId = glitchCounterRef.current;
      const width = window.innerWidth * 0.15;
      const height = window.innerHeight * 0.08;

      const x = Math.random() * (window.innerWidth - width);
      const yMin = window.innerHeight * 0.9;
      const yMax = window.innerHeight - height;
      const y = yMin + Math.random() * (yMax - yMin);

      const colors = [
        "rgba(255, 0, 0, 0.05)", // Red ghost
        "rgba(0, 255, 255, 0.03)", // Cyan ghost
        "rgba(255, 255, 0, 0.03)", // Yellow ghost
      ];

      const container = (
        <motion.div
          key={`glitch-container-${glitchId}`}
          className="absolute overflow-hidden"
          style={{
            top: `${y}px`,
            left: `${x}px`,
            width: `${width}px`,
            height: `${height}px`,
            transform: `skewX(${Math.random() < 0.5 ? "-5deg" : "5deg"})`,
            filter: "blur(0.6px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* RGB ghost layers */}
          {colors.map((color, i) => (
            <motion.div
              key={`glitch-layer-${glitchId}-${i}`}
              className="absolute inset-0"
              style={{
                backgroundColor: color,
                mixBlendMode: "screen",
                transform: `translate(${i % 2 === 0 ? 2 : -2}px, ${
                  i % 2 === 0 ? 1 : -1
                }px)`,
                filter: "blur(1px) drop-shadow(0 0 1px rgba(255,255,255,0.1))",
              }}
              animate={{
                x: [0, i % 2 === 0 ? -3 : 3, 0],
                y: [0, i % 2 === 0 ? 2 : -2, 0],
              }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            />
          ))}

          {/* Distorted slices */}
          {[...Array(6)].map((_, i) => {
            const sliceY = Math.random() * height;
            const sliceH = Math.random() * 8 + 4;
            const offsetX = Math.random() < 0.5 ? -10 : 10;

            return (
              <motion.div
                key={`glitch-bar-${glitchId}-${i}`}
                className="absolute"
                style={{
                  top: `${sliceY}px`,
                  width: `${width}px`,
                  height: `${sliceH}px`,
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)],
                  clipPath:
                    Math.random() < 0.5
                      ? "polygon(0 0, 100% 0, 90% 100%, 10% 100%)"
                      : "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                  mixBlendMode: "lighten",
                }}
                animate={{
                  x: [0, offsetX, 0],
                  scaleX: [1, 1.03, 1],
                }}
                transition={{
                  duration: 0.15,
                  delay: i * 0.02,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      );

      setGlitchElements((prev) => [...prev, container]);

      setTimeout(() => {
        setGlitchElements((prev) =>
          prev.filter(
            (el) =>
              React.isValidElement(el) &&
              el.key !== `glitch-container-${glitchId}`
          )
        );
      }, 700);
    };

    const glitchLoop = () => {
      const nextDelay = Math.random() * 60000 + 90000;
      setTimeout(() => {
        createSoftGlitch();
        glitchLoop();
      }, nextDelay);
    };
    glitchLoop();

    return () => {
      clearInterval(noiseInterval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-10 mix-blend-soft-light pointer-events-none"
      />

      <div
        className="fixed inset-0 z-0 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.005) 1px, transparent 1px)",
          backgroundSize: "2px 2px",
          opacity: 0.03,
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatePresence>{glitchElements}</AnimatePresence>
      </div>
    </>
  );
}
