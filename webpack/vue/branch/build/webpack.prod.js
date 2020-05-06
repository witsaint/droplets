const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const buildConfig = require('../config/index').build;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.base');
const packageConf = require('../package');

module.exports = merge(common, {
  mode: 'production',
  //devtool: false,
  //optimization: {
  //  minimize: true,
  //},
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].[chunkhash].js',
    publicPath: '//localhost:8081/',
    library: packageConf.name,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageConf.name}`,
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
      cssProcessorOptions: buildConfig.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
  ],
});
