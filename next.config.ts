// import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lastfm.freetls.fastly.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'smiski.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}
