/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  // Disable React strict mode warnings in production
  // reactStrictMode: true,
}

module.exports = nextConfig
