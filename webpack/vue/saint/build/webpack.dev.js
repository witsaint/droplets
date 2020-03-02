const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const utils = require('./utils')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devConf = require('../config/index').dev;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConf = require('./webpack.base');

const devWebpackConf = merge(baseWebpackConf, {
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
    // contentBase: path.join(__dirname, '../public/'),
    contentBase: false, // since we use CopyWebpackPlugin.
    // watchContentBase: true,
    host: '0.0.0.0',
    port: devConf.port,
    publicPath: '/',
    quiet: true,
    after(app) {
      console.log(`\nplease visit \x1b[32mhttp://localhost:${devConf.port}`);
    },
    proxy: devConf.proxyTable,
  },
  optimization: {
    minimize: false,
  },
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || devConf.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConf.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConf.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConf)
    }
  })
})
