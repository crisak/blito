/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['blito-models'],
  experimental: {
    appDir: true
  },
  reactStrictMode: false,
  images: {
    domains: [
      'i.pinimg.com',
      'picsum.photos',
      'tinyurl.com',
      'blito-app.s3.amazonaws.com',
      'instagram.fbog2-4.fna.fbcdn.net',
      'www.sanmantattoo.com',
      'cdn-icons-png.flaticon.com',
      'www.pngitem.com'
    ]
  }
}

module.exports = nextConfig
