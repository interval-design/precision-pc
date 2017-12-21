module.exports = {
  css: [
    { src: "~assets/style/custom.scss", lang: "scss" },
    { src: "~assets/style/animate.scss", lang: "scss" },
    { src: "swiper/dist/css/swiper.css" },
    { src: "animate.css/animate.min.css" }
  ],
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "普瑞森" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      }
    ],
    script: [
      { src: "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" }
    ]
  },
  loading: { color: "#3C90EF" },
  router: {
    middleware: "chage-page"
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  env: {
    BASE_URL: "http://www.precisiongene.cn"
  },
  plugins: [
    { src: "~plugins/custom.js" },
    { src: "~/plugins/axios.js" },
    { src: "~plugins/vue-awesome-swiper.js", ssr: false },
    { src: "~plugins/vue-area-linkage.js", ssr: false },
    { src: "~plugins/vue-cookie.js", ssr: false }
  ],
  // proxy: [["/api", { target: "http://www.precisiongene.cn/" }]],
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
    vendor: ["axios", "vue-awesome-swiper"]
  }
};
