/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  experimental: {
    disableOptimizedLoading: true,
  }
}

module.exports = nextConfig 