import colors from 'vuetify/es5/util/colors'
function getBrowserBaseURL() {
  // Production
  if (process.env.SITE_DOMAIN) {
      return `${process.env.SITE_DOMAIN}`
  } else if (process.env.HEROKU_APP_NAME) {
      return `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
  } else {
      return 'https://bong-restframework-app.herokuapp.com'

      // throw "Trying to launch in production without SITE_DOMAIN or HEROKU_APP_NAME defined!"
  }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bongalonuxt',
    title: 'bongalonuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
  ],
  axios: {
    baseURL: 'https://bong-restframework-app.herokuapp.com',
    browserBaseURL: getBrowserBaseURL()
},
auth: {
    fetchUserOnLogin: true,
    plugins: [{ src: '~/plugins/auth.js', client: true }],
    strategies: {
        local: {
            endpoints: {
                login: { url: '/account/login/', method: 'post', propertyName: 'token' },
                logout: { url: '/account/logout/', method: 'post' },
                user: { url: '/account/user/me/', propertyName: false },
            },
            tokenType: 'Token',
            tokenName: 'Authorization'
        }
    },
    redirect: {
        login: '/login',
        home: '/',
        logout: '/login'
    }
},
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
  
        light: {
          primary: '#3f51b5',
          secondary: '#009688',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
