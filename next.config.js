const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-firestore.js' : '',
  reactStrictMode: true,
}
