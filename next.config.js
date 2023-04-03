/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    }); // 针对 SVG 的处理规则

    return config;
  }
};

if (process.env.DOCKER) {
  nextConfig.output = 'standalone'
}

module.exports = nextConfig;
