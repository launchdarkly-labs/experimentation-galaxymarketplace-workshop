/** @type {import('next').NextConfig} */
const { version } = require('./package.json');

const nextConfig = {
  experimental: { instrumentationHook: true },
  reactStrictMode: false,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/marketplace',
        permanent: true,
      },
    ]
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_CREATED_DATE: new Date().toISOString(),
  }
}

module.exports = nextConfig

