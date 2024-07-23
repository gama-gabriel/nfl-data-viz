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
  experimental: {
    outputFileTracingExcludes: [
      "**/node_modules/@next/swc-core-linux-x64-gnu",
      "**/node_modules/@next/swc-core-linux-x64-musl",
      '**/{__pycache__,testing,tests,test_}**/**'
    ],
  },
}
