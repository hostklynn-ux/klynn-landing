import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',

  // API rewrite for development
  async rewrites() {
    return [
      {
        source: '/api/:path((?!auth).*)',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*` || 'http://localhost:4000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
