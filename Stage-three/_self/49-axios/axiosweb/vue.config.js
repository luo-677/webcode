module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
          '/api': {
              // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
              target: 'https://m.maoyan.com/ajax/movieOnInfoList',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          },
        //   '/api': {
        //       // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        //       target: 'http://123.207.32.32:8000/home/multidata',
        //       // 允许跨域
        //       changeOrigin: true,
        //       ws: true,
        //       pathRewrite: {
        //           '^/myapi': ''
        //       }
        //   },
      }
  }
  };