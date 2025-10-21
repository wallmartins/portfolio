import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GlobalLoading } from "@/components/GlobalLoading";
import { ModalProvider } from "@/contexts/ModalContext";
import { AppShell } from "@/components/AppShell";
import { I18nProvider } from "@/components/I18nProvider";

const DotGrid = dynamic(() => import("@/components/DotGrid"));
const NoiseOverlay = dynamic(() => import("@/components/NoiseOverlay"));
const FloatingCircles = dynamic(() => import("@/components/FloatingCircles"));

import { Rubik_Glitch } from "next/font/google";
import { Syne_Mono } from "next/font/google";
import { Baumans } from "next/font/google";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-rubik-glitch",
  fallback: ["sans-serif"],
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-syne-mono",
  fallback: ["sans-serif"],
});

const baumans = Baumans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-baumans",
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Wallace Martins",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden overflow-y-hidden">
      <body
        className={`${rubikGlitch.variable} ${syneMono.variable} ${baumans.variable} overflow-x-hidden overflow-y-hidden h-screen`}
      >
        <SpeedInsights />
        <I18nProvider>
          <ModalProvider>
            {/* Floating Circles */}
            <FloatingCircles />

            {/* Animated Noise */}
            <NoiseOverlay />

            {/* Dot Grid Background */}
            <DotGrid />

            {/* App Shell with Global Loading */}
            <AppShell>
              <GlobalLoading>
                <Suspense fallback={null}>
                  <div className="relative z-50">{children}</div>
                </Suspense>
              </GlobalLoading>
            </AppShell>
          </ModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
