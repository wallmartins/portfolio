"use client";

import { useEffect, useRef, useState } from "react";

type Position = number | string;

interface DraggableProps {
  children: React.ReactNode;
  initialX?: Position;
  initialY?: Position;
  // Novas props para responsividade
  centered?: boolean;
  responsive?: boolean;
  widthPercentage?: number;
  heightPercentage?: number;
  maxWidth?: number;
  minHeight?: number;
}

export default function DraggableWrapper({
  children,
  initialX,
  initialY,
  centered = false,
  responsive = false,
  widthPercentage = 90,
  heightPercentage = 80,
  maxWidth = 896, // 4xl equivalent
  minHeight = 600,
}: DraggableProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Hook para monitorar tamanho da janela
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular dimensões responsivas
  useEffect(() => {
    if (responsive && windowSize.width > 0 && windowSize.height > 0) {
      const calculatedWidth = Math.min(
        (windowSize.width * widthPercentage) / 100,
        maxWidth
      );
      const calculatedHeight = Math.max(
        (windowSize.height * heightPercentage) / 100,
        minHeight
      );

      setDimensions({
        width: calculatedWidth,
        height: calculatedHeight,
      });
    }
  }, [
    responsive,
    windowSize,
    widthPercentage,
    heightPercentage,
    maxWidth,
    minHeight,
  ]);

  // Calcular posição inicial
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

    let x: number, y: number;

    if (centered && windowSize.width > 0) {
      // Centralizar automaticamente
      const elementWidth = responsive
        ? dimensions.width
        : nodeRef.current?.offsetWidth || 0;
      x = (windowSize.width - elementWidth) / 2;
      y = windowSize.height * 0.1; // 10% from top
    } else if (initialX !== undefined && initialY !== undefined) {
      // Usar valores fornecidos
      x = getPixelValue(initialX, "x");
      y = getPixelValue(initialY, "y");
    } else {
      // Valores padrão
      x = 0;
      y = 0;
    }

    setPosition({ x, y });
  }, [initialX, initialY, centered, windowSize, dimensions, responsive]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      // Calcular nova posição
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Limitar movimento dentro da tela
      const elementWidth = responsive
        ? dimensions.width
        : nodeRef.current?.offsetWidth || 0;
      const elementHeight = responsive
        ? dimensions.height
        : nodeRef.current?.offsetHeight || 0;

      newX = Math.max(0, Math.min(newX, windowSize.width - elementWidth));
      newY = Math.max(0, Math.min(newY, windowSize.height - elementHeight));

      setPosition({ x: newX, y: newY });
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
  }, [isDragging, offset, windowSize, dimensions, responsive]);

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

  const containerStyle: React.CSSProperties = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    ...(responsive && {
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
    }),
  };

  return (
    <div
      ref={nodeRef}
      onMouseDown={handleMouseDown}
      style={containerStyle}
      className="cursor-move select-none"
    >
      {responsive ? (
        <div className="w-full h-full overflow-hidden">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
