export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'youtube-clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vk-api', mode: 'client' },
    // { src: '~/plugins/vue-videojs7.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    'nuxt-typed-vuex',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/universal-storage',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faCog',
        'faHome',
        'faBars',
        'faSearch',
        'faVideo',
        'faPlus',
        'faSquare',
        'faBell',
        'faCircle',
      ],
      brands: ['faYoutube'],
    },
  },

  publicRuntimeConfig: {
    vkClientId: process.env.VK_CLIENT_ID,
    vkAuthCallback: process.env.VK_AUTH_CALLBACK,
    vkScope: process.env.VK_SCOPE,
  },
}
