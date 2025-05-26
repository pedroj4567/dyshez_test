import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pozshgkyuidhcmfhilpa.supabase.co",
        pathname: "/storage/v1/object/public/pictures/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth",
        permanent: true,
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;
