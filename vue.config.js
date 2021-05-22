module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
        secure:false,
      }
    }
  }
}
