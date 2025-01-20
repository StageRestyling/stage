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

  script: [
    {
      hid: 'gtm',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M3H3QLVW');`,
      type: 'text/javascript',
    },
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/fonts.css',
    '@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gtm.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  serverMiddleware: [],
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
      { url: '/services-page', changefreq: 'weekly', priority: 0.8 },
      { url: '/car-wraps', changefreq: 'weekly', priority: 0.8 },
      { url: '/ceramic-coating', changefreq: 'weekly', priority: 0.8 },
      { url: '/window-tinting', changefreq: 'weekly', priority: 0.8 },
      { url: '/portfolio-page', changefreq: 'monthly', priority: 0.7 },
      { url: '/contact-page', changefreq: 'monthly', priority: 0.6 },
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/_nuxt/',
    terser: false
  },
  target: 'static',
  generate: {
    dir: 'dist',
    routes: [
      '/about-us',
      '/services-page',
      '/car-wraps',
      '/ceramic-coating',
      '/window-tinting',
      '/portfolio',
      '/contact',
    ],
  },
  publicRuntimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  },
}
