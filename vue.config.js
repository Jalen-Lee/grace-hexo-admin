const {resolve,join} = require('path')

const name = 'grace-hexo-admin'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: 9527,
    openPage: '',
    open: true,
    // overlay: {
    //     warnings: false,
    //     errors: true
    // },
    // compress:true,
    disableHostCheck:true,
    // before: require('')
  },
  configureWebpack:{
    resolve: {
      alias: {
        '@': resolve(__dirname,'src')
      }
    },
  },
  chainWebpack:(config)=>{

  },
  transpileDependencies: [
    'vuetify'
  ]
}
