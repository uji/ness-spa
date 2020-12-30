export default {
  ssr: false,
  head: {
    title: 'ness-spa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  mode: 'spa',
  storybook: {
    // Options
  },
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/apollo'],
  plugins: ['@/plugins/provide-apollo-client.js'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/apolloConfig.js',
    },
  },
}
