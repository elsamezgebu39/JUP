/** @type {import('next').NextConfig} */

const API_URL = process.env.BACKEND_PROD_URL || "http://aadaa.omishtujoy.com/";

var nextConfig = {
  images: {
    domains: [
      "localhost",
      "tailwindui.com",
      "images.unsplash.com",
      "picsum.photos",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://aadaa.omishtujoy.com/api/:path*`,
      },
    ];
  },
};

// const withNextIntl = require("next-intl/plugin")(
//   // This is the default (also the `src` folder is supported out of the box)
//   "./i18n.ts"
// );

module.exports = nextConfig;
// module.exports = withNextIntl(nextConfig);
