export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stage-restyling',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/fonts.css',
    '@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.stagerestyling.ca',
    routes: [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/#home', changefreq: 'weekly', priority: 0.9 },
      { url: '/#about', changefreq: 'weekly', priority: 0.8 },
      { url: '/#service', changefreq: 'weekly', priority: 0.8 },
      { url: '/#portfolio', changefreq: 'monthly', priority: 0.7 },
      { url: '/#contact', changefreq: 'monthly', priority: 0.6 },
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/_nuxt/',
  },

  target: 'static',
  generate: {
    dir: 'dist',
  },
}
