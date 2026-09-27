/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
  ],
  redirects: async () => [
    { source: '/servicos', destination: '/', permanent: true },
    { source: '/eventos-corporativos-rio-de-janeiro', destination: '/corporate', permanent: true },
    { source: '/eventos-corporativos-premium-rj', destination: '/corporate', permanent: true },
    { source: '/eventos/corporativos', destination: '/corporate', permanent: true },
    { source: '/eventos-corporativos-completo', destination: '/corporate', permanent: true },
    { source: '/experiencias-de-marca', destination: '/brand-experience', permanent: true },
    { source: '/concierge-rio-de-janeiro', destination: '/concierge', permanent: true },
    { source: '/concierge-eventos-rio', destination: '/concierge', permanent: true },
    { source: '/servico-concierge-premium', destination: '/concierge', permanent: true },
    { source: '/eventos-de-luxo-rio-de-janeiro', destination: '/private', permanent: true },
    { source: '/experiencias', destination: '/projetos', permanent: true },
    { source: '/cases', destination: '/projetos', permanent: true },
    { source: '/casos-sucesso', destination: '/projetos', permanent: true },
    { source: '/event-services', destination: '/', permanent: true },
    { source: '/events-rio', destination: '/onde-atuamos', permanent: true },
    { source: '/por-que-riosilux', destination: '/sobre', permanent: true },
    { source: '/casamentos-luxo-ipanema', destination: '/eventos-privados-rio-de-janeiro', permanent: true },
    { source: '/despedida-solteiro-luxo-rj', destination: '/private', permanent: true },
    { source: '/eventos-barra-tijuca', destination: '/eventos-privados-rio-de-janeiro', permanent: true },
    { source: '/eventos-mansoes-rio', destination: '/eventos-privados-rio-de-janeiro', permanent: true },
    { source: '/experiencias-exclusivas-rio', destination: '/concierge', permanent: true },
    { source: '/producao-eventos-leblon', destination: '/eventos-privados-rio-de-janeiro', permanent: true },
  ],
}

export default nextConfig
