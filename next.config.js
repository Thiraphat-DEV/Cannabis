const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }
  distDir: "build";
  pageExtensions: ["ts", "tsx", "js", "jsx"];
  eslint: {
    ignoreDuringBuilds: true;
  }
  typescript: {
    ignoreBuildErrors: true;
  }
  reactStrictMode: true
};
