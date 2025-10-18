import "./globals.css";
import DotGrid from "@/components/DotGrid";
import NoiseOverlay from "@/components/NoiseOverlay";
import FloatingCircles from "@/components/FloatingCircles";
import Header from "@/components/Header";

import { Rubik_Glitch } from "next/font/google";
import { Syne_Mono } from "next/font/google";
import { Baumans } from "next/font/google";
import "../i18n";

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
    <html lang="pt-BR">
      <body
        className={`${rubikGlitch.variable} ${syneMono.variable} ${baumans.variable}`}
      >
        {/* Floating Circles */}
        <FloatingCircles />

        {/* Animated Noise */}
        <NoiseOverlay />

        {/* Dot Grid Background */}
        <DotGrid />

        <Header />

        {/* Main Content */}
        <div className="relative z-50">{children}</div>
      </body>
    </html>
  );
}
