module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'lesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    ['storyblok-nuxt', {accessToken: 'aqGFI6G8ymQp0mfUxIAkJQtt', cacheProvider: 'memory'}],
    ['nuxt-mq', {
      breakpoints: {
        phone: 481,
        tabletPortrait: 769,
        tabletLandscape: 993,
        desktop: Infinity
      }
    }]
  ],

  plugins: [
    { src: '~/plugins/vue-swiper.js', ssr: false },
    { src: '~/plugins/vue-scroll-to.js' },
    { src: '~/plugins/vue-click-outside.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: [['vue-app', {
        useBuiltIns: true,
        targets: {
          ie: 9, uglify: true
        }
      }]]
    },
    vendor: [
      'babel-polyfill',
      'axios'
    ],
    analyze: true,
    /*
    ** PostCSS plugins config
    */
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
      }),
      require('cssnano')({
        preset: 'default',
      }),
      require('postcss-pxtorem')({
        rootValue: 14,
        unitPrecision: 5,
        propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      })
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    '~/api/index.js'
  ]
}
