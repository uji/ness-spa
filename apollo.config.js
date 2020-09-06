// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "ness-spa",
      // URL to the GraphQL API
      url: "http://localhost:3000/query"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
