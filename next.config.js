/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
