module.exports = {
  devServer: {
    proxy: {
      '/apiurl': {
        target: 'http://localhost:8888/', // 后端url
        changeOrigin: true,
        pathRewrite: {
          '^/apiurl': '/'
        }
      }
    },
    port: 8898 // 前端端口号
  }
}
