/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
