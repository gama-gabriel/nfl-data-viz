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
      '*': [
        "**/node_modules/@next/swc-linux-x64-gnu/**",
        "**/node_modules/@next/swc-linux-x64-musl/**",
        '**/{__pycache__,testing,tests,test_}**/**',
        "node_modules/@next/swc-linux-x64-gnu/**",
        "node_modules/@next/swc-linux-x64-musl/**",
        '{__pycache__,testing,tests,test_}**/**',
        'node_modules/@swc/core-linux-x64-gnu/**',
        'node_modules/@swc/core-linux-x64-musl/**',
        'node_modules/@esbuild/linux-x64/**',
        'node_modules/@swc/**/*',
        'node_modules/@esbuild/**/*',
        'node_modules/terser/**/*',
        'node_modules/webpack/**/*',
      ],
    }
  },
}
