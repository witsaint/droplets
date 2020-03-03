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
  mode: 'production',
  //devtool: 'source-map',
  //optimization: {
  //  minimize: true,
  //},
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': '"staging"'},
      __TRACKURL__: '"https://k8s.jufandev.com:44350/front-event/v1/event"',
      __IMURL__: '"http://jufan.udesk.cn/im_client/?web_plugin_id=55491&group_id=86794"',
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: './index.html',
      inject: true,
    }),
  ],
});
