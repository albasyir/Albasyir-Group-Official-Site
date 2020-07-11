import colors from "vuetify/es5/util/colors";

require("dotenv").config();

export default {
  /**
   *
   * Development Serve Config
   *
   */
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  /**
   *
   * Custom Router
   *
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "404",
        path: "*",
        component: resolve(__dirname, "pages/error/PageNotFound.vue")
      });
    }
  },

  /**
   *
   * Page mode config
   *
   */
  mode: "spa",

  /**
   *
   * Header page config
   *
   */
  head: {
    title: process.env.TITLE_GLOBAL,
    titleTemplate: process.env.TITLE_TEMPLATE,
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: process.env.WEB_CHARSET },
      { name: "robots", content: process.env.WEB_ROBOTS },

      {
        hid: "description",
        name: "description",
        content: process.env.WEB_DESC
      },
      {
        name: "keywords",
        content: process.env.WEB_TAG
      },

      /* OG */
      { property: "og:url", content: process.env.WEB_URL },
      { property: "og:title", content: process.env.WEB_TITLE },
      { property: "og:description", content: process.env.WEB_DESC },

      /* dcterms */
      {
        name: "dcterms.subject",
        content: process.env.WEB_DESC
      },
      { name: "dcterms.type", content: process.env.WEB_TYPE },
      { name: "dcterms.language", content: process.env.WEB_COUNTRY_CODE }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "canonical", href: process.env.WEB_URL }
    ]
  },

  /**
   *
   * Loading Settings
   *
   */
  loading: "@/components/Loading.vue",
  loadingIndicator: "@/components/SPAPripare.html",

  /**
   *
   * Global CSS
   *
   */
  css: [],

  /**
   *
   * Plugin
   *
   */
  plugins: [],

  /**
   *
   * Nuxt.js dev-modules
   *
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],

  /**
   *
   * Nuxt.js modules
   *
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",

    "@nuxtjs/pwa",

    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],

  build: {
    analyze: true
  },

  /**
   *
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   *
   */
  axios: {},

  /**
   *
   * vuetify module configuration
   * https://github.com/nuxt-community/vuetify-module
   *
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  /**
   *
   * Build configuration
   *
   */
  build: {
    /**
     *
     * You can extend webpack config here
     *
     */
    extend(config, ctx) {}
  }
};
