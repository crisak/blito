/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['models'],
  experimental: {
    appDir: true
  },
  reactStrictMode: false,
  images: {
    domains: [
      'i.pinimg.com',
      'picsum.photos',
      'tinyurl.com',
      'c1.staticflickr.com',
      'c2.staticflickr.com',
      'c3.staticflickr.com',
      'c4.staticflickr.com',
      'c5.staticflickr.com',
      'c6.staticflickr.com',
      'c7.staticflickr.com',
      'c8.staticflickr.com',
      'c9.staticflickr.com',
      'blito-app.s3.amazonaws.com',
      'instagram.fbog2-4.fna.fbcdn.net'
    ]
  }
}

module.exports = nextConfig
