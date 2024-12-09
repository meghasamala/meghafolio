// import type { NextConfig } from "next";
// require('dotenv').config()

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
