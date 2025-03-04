/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Add any external image domains here
      },
    ],
  },
};

module.exports = nextConfig;
