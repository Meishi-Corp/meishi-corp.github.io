const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  withPWA: ({
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
}
