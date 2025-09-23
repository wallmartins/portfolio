"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Circle = ({
  size,
  delay,
  gradient,
}: {
  size: number;
  delay: number;
  gradient: string;
}) => {
  const x = useMotionValue(Math.random() * 90 + 5);
  const y = useMotionValue(Math.random() * 90 + 5);
  const opacity = useMotionValue(0.35);

  const xVW = useTransform(x, (v) => `${v}vw`);
  const yVH = useTransform(y, (v) => `${v}vh`);

  const getRandomDestination = () => ({
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
  });

  useEffect(() => {
    animate(opacity, [0.2, 0.6, 0.2], {
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const animateNextPosition = () => {
      const destination = getRandomDestination();
      const duration = Math.random() * 10 + 6;

      animate(x, destination.x, {
        duration,
        ease: "easeInOut",
        onComplete: animateNextPosition,
      });
    };

    const animateNextPositionY = () => {
      const destination = getRandomDestination();
      const duration = Math.random() * 10 + 6;

      animate(y, destination.y, {
        duration,
        ease: "easeInOut",
        onComplete: animateNextPositionY,
      });
    };

    const timeout = setTimeout(() => {
      animateNextPosition();
      animateNextPositionY();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, x, y, opacity]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        x: xVW,
        y: yVH,
        opacity,
        borderRadius: "50%",
        filter: "blur(100px)",
        background: gradient,
        zIndex: 0,
      }}
    />
  );
};

export default function FloatingCircles() {
  const GRADIENTS = [
    "linear-gradient(135deg, rgba(0,180,255,0.6), rgba(255,150,230,0.4))",
    "linear-gradient(45deg, rgba(200,100,255,0.5), rgba(120,220,255,0.3))",
    "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(0,180,255,0.5))",
    "linear-gradient(180deg, rgba(255,150,230,0.3), rgba(0,180,255,0.4))",
  ];

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-[rgb(9,1,13)]">
      {[...Array(4)].map((_, i) => (
        <Circle
          key={i}
          size={Math.random() * 160 + 120}
          delay={Math.random() * 2}
          gradient={GRADIENTS[i % GRADIENTS.length]}
        />
      ))}
    </div>
  );
}
