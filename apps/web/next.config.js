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
      'www.pngitem.com',
      'www.tu-moda-online.es' /** TODO - remove */,
      'www.okchicas.com' /** TODO - remove */,
      'scontent-bog1-1.xx.fbcdn.net', // facebook sources
      'cdn.iconscout.com' /** TODO delete temporal profile image collaborator */,
      'blitoa1669ad374a84249be178ad12241cd9b133401-dev.s3.us-east-1.amazonaws.com'
    ]
  }
}

module.exports = nextConfig
