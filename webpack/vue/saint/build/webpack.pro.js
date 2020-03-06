const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  //devtool: false,
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
      'process.env': {'NODE_ENV': '"production"'},
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: './index.html',
      inject: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
  ],
});
