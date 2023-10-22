/** @type {import('next').NextConfig} */
const nextConfig = {
  // this is alfa in the nextJs for that we have to enable it like this
  experimental: { serverActions: true },
  //when use the iage with next image should config it in the next.config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
