export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stage Restyling | High-Quality Vehicle Wraps & Protection',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Discover high-quality vehicle wraps, window tinting, and paint protection at Stage Restyling. Our expert team ensures top-notch service and results.' },
      { name: 'keywords', content: 'vehicle wraps, window tinting, paint protection, vinyl wraps, Edmonton car services' },
      { name: 'author', content: 'Stage Restyling' },
      { name: 'robots', content: 'index, follow' }
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
      { url: '/', changefreq: 'weekly', priority: 0.9 },
      { url: '/about-us', changefreq: 'weekly', priority: 0.8 },
      { url: '/#service', changefreq: 'weekly', priority: 0.8 },
      { url: '/#portfolio', changefreq: 'monthly', priority: 0.7 },
      { url: '/#contact', changefreq: 'monthly', priority: 0.6 },
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/_nuxt/',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'about',
          path: '/about-us',
          component: resolve(__dirname, 'pages/about-us.vue'),
        }
      );
    },
  },
  target: 'static',
  generate: {
    dir: 'dist',
    routes: ['/about-us'],
  },
  publicRuntimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  },
}
