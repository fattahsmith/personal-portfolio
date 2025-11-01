/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  outputFileTracingRoot: process.cwd(),
  // Menghapus output: 'export' agar kompatibel dengan Vercel deployment
};

module.exports = nextConfig;
