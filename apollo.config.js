// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'vods',
      // URL to the GraphQL API
      url: 'https://rickandmortyapi.com/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}