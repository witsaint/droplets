module.exports = {
  base: {
    target: '',
    define: {
      'process.env': { NODE_ENV: '"development"' },
      __TRACKURL__: '"https://k8s.jufandev.com:44350/front-event/v1/event"',
      __IMURL__: '"http://jufan.udesk.cn/im_client/?web_plugin_id=55491&group_id=86794"',
    },
    pwa: true,
    pwaStaticPath: 'pwa_static/'
  },
  dev: {
    PORT: '8081',
    target: '',
    proxy: {
      '/': {
        target: 'https://k8s.jufandev.com:44350/xiaoqiao-api',
        changeOrigin: true,
      },
    },
  },
  pro: {}
}
