/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during build since we validate types separately in each workspace
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during build
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
}

module.exports = nextConfig
