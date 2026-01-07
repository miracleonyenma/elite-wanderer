// ./next.config.ts
import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* config options here */
  output: isVercel ? undefined : "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
