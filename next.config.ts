const nextConfig = {
  output: 'standalone',
  typescript: {
    // ⚠️ Ignore les erreurs TypeScript pendant le build
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
