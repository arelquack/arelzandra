import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.thum.io', // Kita pake layanan gratis thum.io
        port: '',
      },
    ],
  },
};

export default nextConfig;