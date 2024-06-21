/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/comics/**",
      },
    ],
  },
};

export default nextConfig;
