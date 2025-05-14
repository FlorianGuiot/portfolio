import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/main',
      },
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
};

export default nextConfig;
