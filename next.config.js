/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/:path*"
            : "/api/",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.espncdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    hostname: '0.0.0.0',
    port: 3001
  }
}
