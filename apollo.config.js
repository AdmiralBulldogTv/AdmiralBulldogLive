// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'vods',
      // URL to the GraphQL API
      url: 'https://vods.admiralbulldog.live/api/gql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}