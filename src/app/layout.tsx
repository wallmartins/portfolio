import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GlobalLoading } from "@/components/GlobalLoading";
import { ModalProvider } from "@/contexts/ModalContext";
import { AppShell } from "@/components/AppShell";
import { I18nProvider } from "@/components/I18nProvider";
import { getStructuredData } from "@/lib/seo";

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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://wallacemartins.dev";

export const metadata: Metadata = {
  title: "Wallace Martins | Senior Software Engineer",
  description:
    "Senior Software Engineer specialist em desenvolvimento web, frontend, fullstack e soluções de IA. Transformando ideias em realidades digitais.",
  keywords: [
    "Wallace Martins",
    "wallm",
    "desenvolvedor",
    "engenheiro de software",
    "frontend developer",
    "fullstack developer",
    "React",
    "TypeScript",
    "IA",
    "AI",
    "web development",
    "desenvolvimento web",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
      "en": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "Wallace Martins | Senior Software Engineer",
    description:
      "Senior Software Engineer specialist em desenvolvimento web, frontend, fullstack e soluções de IA.",
    siteName: "Wallace Martins",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wallace Martins - Senior Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Martins | Senior Software Engineer",
    description:
      "Senior Software Engineer specialist em desenvolvimento web, frontend, fullstack e soluções de IA.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@wallmartins",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = getStructuredData("Person");

  return (
    <html lang="pt-BR" className="overflow-x-hidden overflow-y-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
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
