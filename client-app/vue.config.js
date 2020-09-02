module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      '^/': {
          target: 'http://localhost:5001/api',
          ws: true,
          changeOrigin: true,
      },
    },
  }
};