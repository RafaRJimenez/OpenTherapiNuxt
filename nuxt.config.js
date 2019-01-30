global.File= typeof window === 'undefined' ? Object : window.File;


module.exports = {
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000/api',
    STATUS_URL: process.env.STATUS_URL || 'http://localhost:3001',
    STATICS_URL: process.env.STATICS_URL || 'http://localhost:9000',
    DEFAULT_AVATAR_URL:
      process.env.DEFAULT_AVATAR_URL ||
      'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    DEFAULT_HEADER_URL:
      process.env.DEFAULT_HEADER_URL ||
      'http://www.hexatier.com/wp-content/uploads/2016/09/hexagon-header-bg2.jpg',
    REDIRECTION: process.env.REDIRECTION || '/',
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || '',
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway'},
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript',
      },
      ],
    css: [
        'bulma-carousel/dist/css/bulma-carousel.min.css',
      ],
  },

  loading: { color: '#3B8070' },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'index',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      });
    },
  },

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      if (!isClient) {
        config.externals.splice(0, 0, (context, request, callback) => {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }
    },
  },

  modules: [
    '~/modules/typescript.js',
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  plugins: [
    '~/plugins/api.ts',
    '~/plugins/buefy.js',
    '~/plugins/google-maps.js',
    '~/plugins/vue-scrollto.js',
  ],

  toast: {
    position: 'bottom-center',
    duration: 5000,
    fullWidth: true,
  },
};
