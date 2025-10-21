"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

export function GlobalLoading({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  useEffect(() => {
    const loaded = sessionStorage.getItem("hasLoadedBefore");
    if (loaded) {
      setIsInitialLoading(false);
      setHasLoadedBefore(true);
    }
  }, []);

  const handleInitialLoadingComplete = () => {
    sessionStorage.setItem("hasLoadedBefore", "true");
    setIsInitialLoading(false);
    setHasLoadedBefore(true);
  };

  if (isInitialLoading && !hasLoadedBefore) {
    return <Loading onComplete={handleInitialLoadingComplete} duration={1200} />;
  }

  return <>{children}</>;
}
