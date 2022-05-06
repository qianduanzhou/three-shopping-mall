const {
  createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
  let { REACT_APP_NORMALURL: normalUrl } = process.env
  app.use(createProxyMiddleware('/normalUrl', {//配置本地代理，防止跨域
    target: normalUrl,
    /*这里写自己的代理地址*/
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/normalUrl': ''
    },
  }));
};