/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('canvas', 'jsdom');
    return config;
  },
};

module.exports = nextConfig;
