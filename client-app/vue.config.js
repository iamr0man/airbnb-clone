module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    proxy: {
        '/api':{
            target: 'http://localhost:3000/',
            changeOrigin: true
        }
    },
  }
};
