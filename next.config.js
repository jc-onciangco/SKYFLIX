module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  experimental: {
    esmExternals: false
  },
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig