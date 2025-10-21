"use client";

import { useEffect, ReactNode } from "react";
import "../i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // i18n já foi inicializado pelo import acima
  }, []);

  return <>{children}</>;
}
