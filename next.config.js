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
    outputFileTracingExcludes: {
      '/api': ['**/{__pycache__,testing,tests,test_}**/**'],
      '/api': ['data/**'],
      '/api': ['../node_modules/**'],
    },
  },
}
