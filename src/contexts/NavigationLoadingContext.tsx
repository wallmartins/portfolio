"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavigationLoadingContextType {
  isNavigating: boolean;
  startNavigation: () => void;
  endNavigation: () => void;
}

const NavigationLoadingContext = createContext<NavigationLoadingContextType | undefined>(undefined);

export function NavigationLoadingProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = () => {
    setIsNavigating(true);
  };

  const endNavigation = () => {
    setIsNavigating(false);
  };

  return (
    <NavigationLoadingContext.Provider value={{ isNavigating, startNavigation, endNavigation }}>
      {children}
    </NavigationLoadingContext.Provider>
  );
}

export function useNavigationLoading() {
  const context = useContext(NavigationLoadingContext);
  if (context === undefined) {
    throw new Error("useNavigationLoading must be used within a NavigationLoadingProvider");
  }
  return context;
}
