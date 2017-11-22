module.exports = {
  css: [
    { src: '~assets/style/custom.scss', lang: 'scss' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'precision-pc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '普瑞森官网' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders:[
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css', 'sass'],
      }
    ],
    vendor: ["axios"]
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  // proxy: [["/api", { target: "" }]]
  plugins: ['~plugins/components.js']
}
