import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'miro.medium.com',      // Main Medium image server
      'cdn-images-1.medium.com', 
      'cdn-images-2.medium.com',
      'cdn-images-3.medium.com',
      'cdn.jsdelivr.net',     // Sometimes used for code snippets
      'github.com',           // In case there are GitHub images
      'raw.githubusercontent.com',
      'images.unsplash.com'   // Often used in Medium articles
    ]
  },
};

export default nextConfig;
