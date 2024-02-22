/** @type {import('next').NextConfig} */
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


    images: {
        domains: ['http2.mlstatic.com'],
      }
};

export default nextConfig;


  


