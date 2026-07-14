import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
//     basePath:"/ayman-portfolio",

// assetPrefix:"/ayman-portfolio/",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  
};

export default nextConfig;
