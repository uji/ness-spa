export default {
  components: true,
  mode: 'spa',
  storybook: {
    // Options
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/apolloConfig.js',
    },
  },
}
