"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LoadingProps {
  onComplete?: () => void;
  duration?: number;
}

const Loading = ({ onComplete, duration = 2000 }: LoadingProps) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete?.();
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-button text-[#dbe1e3] text-sm tracking-wider">
          {t("loading")}
        </p>

        <div className="w-64 h-16 bg-[#0d1220]/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg flex items-center justify-center p-4">
          <div className="w-full bg-[#181d2c] rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3d5a80] to-[#98c1d9] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
