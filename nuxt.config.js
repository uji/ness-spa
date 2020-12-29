export default {
  components: true,
  mode: 'spa',
  storybook: {
    // Options
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/query',
      },
    },
  },
}
