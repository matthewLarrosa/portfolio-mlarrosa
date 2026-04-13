import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/portfolio-mlarrosa" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isProduction && { output: "export" }),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

