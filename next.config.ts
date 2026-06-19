import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static site generation (SSG export)
  images: {
    domains: ["cdn.showmanonline.com", "images.unsplash.com"],
    unoptimized: true, // 👈 required for static export with next/image
  },
};

export default nextConfig;