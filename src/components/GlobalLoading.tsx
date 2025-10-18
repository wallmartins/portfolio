"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export function GlobalLoading({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);

  useEffect(() => {
    if (!isInitialLoading && pathname !== previousPathname) {
      setShowContent(false);
      const timer = setTimeout(() => {
        setShowContent(true);
        setPreviousPathname(pathname);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, isInitialLoading, previousPathname]);

  const handleInitialLoadingComplete = () => {
    setIsInitialLoading(false);
    setTimeout(() => setShowContent(true), 50);
  };

  if (isInitialLoading) {
    return <Loading onComplete={handleInitialLoadingComplete} duration={1500} />;
  }

  return (
    <div
      className={`transition-opacity duration-300 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
