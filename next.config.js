/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  // 根據環境變量設定 basePath 和 assetPrefix
  basePath: process.env.GITHUB_ACTIONS ? '/barnew' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/barnew/' : '/',
};

module.exports = nextConfig;
