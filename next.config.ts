import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  compiler: {
    removeConsole: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
