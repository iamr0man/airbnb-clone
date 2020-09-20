module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    index: '',
    port: 8080,
    host: '0.0.0.0',
    proxy: {
        '/api':{
            target: 'http://localhost:3000/',
            changeOrigin: true
        }
    },
  }
};