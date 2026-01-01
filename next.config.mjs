/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Adios',
  assetPrefix: '/Adios/',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
