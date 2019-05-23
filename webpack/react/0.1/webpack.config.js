var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var WorkboxPlugin = require('workbox-webpack-plugin');
//var CopyWebpackPlugin = require('copy-webpack-plugin');

var targetSub = process.env.NODE_ENV === 'production'? 'dist/': 'public/'
module.exports = {
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/, to: path.posix.join('/','index.html')
      }]
    },
    hot: false,
    contentBase: path.join(__dirname, './public/'),
    watchContentBase: true,
    host: 'localhost',
    port: '8080',
    publicPath: '/',
    quiet: true,
    after: function(app){
      console.log('\nplease visit \x1b[32mhttp://localhost:8080')
    },
    proxy: {
      '/': {
        target: "https://t-yanjiu.jufandev.com:44350",
        changeOrigin: true,
      }
    }
  },
  entry: ['../index.js'],
  output: {
    path: path.resolve(__dirname, targetSub),
    filename: '[name].[chunkhash].js',
    //filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },
      { test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader?-autoprefixer', options: { importLoaders: 1 } },
          {loader: 'postcss-loader',options: { config: { path: path.resolve(__dirname, './postcss.config.js') }}},
          {
            loader: 'less-loader',  //
            options: {
              importLoaders: 1
            }
          }
        ],
        // include: path.join(__dirname, 'src'), //限制范围，提高打包速度
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: [{
          //loader: 'url?limit=undefined&name=[name].[hash:16].[ext]'
          loader: 'url-loader',
          options: {
            limit: 1,
            outputPath: 'assets/',
            name: '[name].[hash:16].[ext]'
          }
        }],
        //loader: 'url?limit=undefined&name=[name].[hash:16].[ext]',
        //loader: 'url-loader',
        //query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  target: 'web',
  mode: process.env.NODE_ENV || 'development',//'production',
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    splitChunks: {
      chunks: 'all',
      maxSize: 120000,
      name: false,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          maxSize: 120000,
          reuseExistingChunk: true,
          chunks: 'initial',
          minChunks: 2,
          //name: false,
          filename: 'vendor.[chunkhash].js'
        },
				common: {
					priority: -15,
          reuseExistingChunk: true,
					chunks: 'initial',
					minChunks: 2,
					//name: false,
					filename: 'common.[chunkhash].js'
				},
        default: {
          priority: -20,
          reuseExistingChunk: true,
          chunks: 'async',
          // filename: '[name].[chunkhash].js'
        }
      }
    },
    // 为每个入口提取出webpack runtime模块
    runtimeChunk: { name: 'manifest' },
  },
  plugins: [
    require("autoprefixer"),
    require('postcss-px2rem'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'__TRACKURL__': '"http://t.jufandev.com:18032/front-event/v1/event"'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({filename:'[name].[hash].css'}),
    new CleanWebpackPlugin(['dist','public']),
    new AssetsPlugin({ path: path.join(__dirname, 'public/assets') }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, targetSub+'index.html'),
      template: 'index.html',
      inject: true,
      //chunksSortMode: 'dependency'
    }),
		new WorkboxPlugin.InjectManifest({
			//skipWaiting: true,
			//clientsClaim: true,
			importWorkboxFrom: 'local',
			//importsDirectory: './workbox/',
			swSrc: './sw_base.js',
			swDest: `sw.js`
		}),
		//new CopyWebpackPlugin([{from: 'workbox-v3.6.3/', to: targetSub}])
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },
  devtool: process.env.NODE_ENV !== 'production' && 'eval-source-map'
  //externals: nodeModules
}
