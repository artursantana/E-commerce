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

  "routes": [
    { "handle": "filesystem" },
    { "src": "/shop/Shop", "dest": "/shop/Shop" }
  ],
  
  images: {
    domains: ['http2.mlstatic.com'],
  }
};

export default nextConfig;


  


