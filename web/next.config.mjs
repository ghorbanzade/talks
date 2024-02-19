/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/talks',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
