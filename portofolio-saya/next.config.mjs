/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org', // ➔ Wajib ditulis persis seperti ini
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
