/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srasia-backend.onrender.com',
      
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
