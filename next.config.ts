import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'kraison.thddns.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '139.59.105.108',
        port: '9000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'minio.speedynetloans.net',
        pathname: '/**',
      },
    ],
  },
};

// export แบบใช้ analyzer ห่อ config
export default withAnalyzer(nextConfig);
