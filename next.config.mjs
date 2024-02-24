@type {import('next').NextConfig}
const nextConfig = {


  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/Shop',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

    images: {
        domains: ['http2.mlstatic.com'],
      }
};

export default nextConfig;


  


