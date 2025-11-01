/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  outputFileTracingRoot: process.cwd(),
  // Konfigurasi untuk Vercel deployment
  distDir: '.next'
};

module.exports = nextConfig;
