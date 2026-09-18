import type { NextConfig } from "next";

const protocol = (process.env.NEXT_PUBLIC_API_PROTOCOL || 'http') as 'http' | 'https';
const hostname = process.env.NEXT_PUBLIC_API_HOSTNAME || '127.0.0.1';
const port = process.env.NEXT_PUBLIC_API_PORT;
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    dangerouslyAllowLocalIP: isDev,
    remotePatterns: [
      {
        protocol: protocol,
        hostname: hostname,
        port: port,
        pathname: '/media/**',
      }
    ]
  }
};

export default nextConfig;
