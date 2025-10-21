"use client";

import { useTranslation } from "react-i18next";

const NavigationLoading = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
        <p className="font-button text-[#dbe1e3] text-sm tracking-wider animate-pulse">
          {t("loading")}
        </p>

        <div className="w-64 h-16 bg-[#0d1220]/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg flex items-center justify-center p-4">
          <div className="w-full bg-[#181d2c] rounded-full h-2 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#3d5a80] via-[#98c1d9] to-[#3d5a80] rounded-full animate-[shimmer_1s_ease-in-out_infinite] bg-[length:200%_100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLoading;
