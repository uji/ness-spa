export default {
  components: true,
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
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build'],
  plugins: ['@/plugins/provide-apollo-client.js'],
}
