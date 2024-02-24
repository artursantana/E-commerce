/** @type {import('next').NextConfig} */
const nextConfig = {

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/Shop',
        permanent: true,
      },
    ];
  },
  
  images: {
    domains: ['http2.mlstatic.com'],
  }
};

export default nextConfig;


  


