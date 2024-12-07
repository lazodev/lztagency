import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Permite que a construção de produção complete com erros de ESLint
    ignoreDuringBuilds: false,
  },
  webpack(config) {
    // Adiciona suporte para importar arquivos .svg como componentes React
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Define fallbacks para resolver dependências ausentes no Node.js
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };

    return config;
  },
};

export default nextConfig;
