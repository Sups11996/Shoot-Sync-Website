import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shoot.product-api.hamroyouthit.com",
      },
    ],
  },
};

export default nextConfig;