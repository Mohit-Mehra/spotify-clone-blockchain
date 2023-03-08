/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kajabi-storefronts-production.kajabi-cdn.com',
        
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'angartwork.akamaized.net',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '',
      },
    ],
  },
}


module.exports = nextConfig
