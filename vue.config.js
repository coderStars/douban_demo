module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
      "/music": {
        target: "https://api.douban.com/v2",
        changeOrigin: true,
      }
    }
  }
}