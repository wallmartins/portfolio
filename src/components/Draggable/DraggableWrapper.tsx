"use client";

import { useEffect, useRef, useState } from "react";

type Position = number | string;

interface DraggableProps {
  children: React.ReactNode;
  initialX: Position;
  initialY: Position;
}

export default function DraggableWrapper({
  children,
  initialX,
  initialY,
}: DraggableProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const getPixelValue = (value: Position, axis: "x" | "y") => {
      if (typeof value === "number") return value;
      if (typeof window !== "undefined") {
        const size = axis === "x" ? window.innerWidth : window.innerHeight;
        const percent = parseFloat(value.replace("%", "")) || 0;
        return (percent / 100) * size;
      }
      return 0;
    };

    setPosition({
      x: getPixelValue(initialX, "x"),
      y: getPixelValue(initialY, "y"),
    });
  }, [initialX, initialY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = nodeRef.current?.getBoundingClientRect();
    if (rect) {
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsDragging(true);
  };

  return (
    <div
      ref={nodeRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="cursor-move select-none"
    >
      {children}
    </div>
  );
}
