/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      },
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com"
      },
      {
        protocol: 'https',
        hostname: "i.ibb.co"
      },
      {
        protocol: 'https',
        hostname: "ibb.co"
      },
      {
        protocol: 'https',
        hostname: "https://i.ibb.co/t4k7ZJ7/fitlife.png"
      },
    ],
  }
}

module.exports = nextConfig
