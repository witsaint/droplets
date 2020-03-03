const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/, to: path.posix.join('/', 'index.html'),
      }],
    },
    hot: false,
    contentBase: path.join(__dirname, '../public/'),
    watchContentBase: true,
    host: '0.0.0.0',
    port: '8080',
    publicPath: '/',
    quiet: true,
    after(app) {
      console.log('\nplease visit \x1b[32mhttp://localhost:8080');
    },
    proxy: {
      '/': {
        target: 'https://t-yanjiu.jufandev.com:44350',
        changeOrigin: true,
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': '"development"'},
      __TRACKURL__: '"https://k8s.jufandev.com:44350/front-event/v1/event"',
      __IMURL__: '"http://jufan.udesk.cn/im_client/?web_plugin_id=55491&group_id=86794"',
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: './index.html',
      inject: true,
      // chunksSortMode: 'dependency'
    }),
  ],
  devtool: 'inline-source-map',
});
