import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "passxglobal.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
