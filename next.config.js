/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY_OPENAI: process.env.API_KEY_OPENAI
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
