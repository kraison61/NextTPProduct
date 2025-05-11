import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: [
        '**/node_modules/**',
        '**/C:/Users/COJ/Cookies/**',
        '**/C:/Users/COJ/Application Data/**',
        '**/C:/Users/COJ/**',
      ],
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.220.253',
        pathname: '/theeraphong/**',
      },
      {
        protocol: 'http',
        hostname: 'kraison.thddns.net',
        pathname: '/theeraphong/**',
      },
      {
        protocol: 'http',
        hostname: '139.59.105.108',
        port: '9000',
        pathname: '/theeraphong/**',
      },
      {
        protocol: 'https',
        hostname: 'minio.speedynetloans.net',
        pathname: '/theeraphong/**',
      },
    ],
  },
};

export default nextConfig;