const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderConfig = require('./vue-loader.conf');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          { loader: 'css-loader?-autoprefixer', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { config: { path: path.resolve(__dirname, '../postcss.config.js') } } },
          {
            loader: 'less-loader', //
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  target: 'web',
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    namedModules: true,
    // splitChunks: {
    //   chunks: 'all',
    //   maxSize: 120000,
    //   name: false,
    //   automaticNameDelimiter: '.',
    //   // cacheGroups其实可以根据test来用path.resole等去命中哪些模块是可以提取的
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       maxSize: 120000,
    //       reuseExistingChunk: true,
    //       chunks: 'initial',
    //       minChunks: 2,
    //       // name: false,
    //       filename: 'vendor.[chunkhash].js',
    //     },
    //     common: {
    //       priority: -15,
    //       reuseExistingChunk: true,
    //       chunks: 'initial',
    //       minChunks: 2,
    //       // name: false,
    //       filename: 'common.[chunkhash].js',
    //     },
    //     default: {
    //       priority: -20,
    //       reuseExistingChunk: true,
    //       chunks: 'async',
    //       // filename: '[name].[chunkhash].js'
    //     },
    //   },
    // },
  },
  /*
      上面提到 chunkFilename 指定了 chunk 打包输出的名字，那么文件名存在哪里了呢？
      它就存在引用它的文件中。这意味着一个 chunk 文件名发生改变，会导致引用这个 chunk 文件也发生改变。
      runtimeChunk 设置为 true, webpack 就会把 chunk 文件名全部存到一个单独的 chunk 中，
      这样更新一个文件只会影响到它所在的 chunk 和 runtimeChunk，避免了引用这个 chunk 的文件也发生改变。
    */
  plugins: [
    // 请确保引入这个插件！这个插件才会将但文件组件中各个部分对应到其他load
    new VueLoaderPlugin(),
    require('autoprefixer'),
    require('postcss-px2rem'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../public')],
      verbose: true,
    }),
    new AssetsPlugin({ path: path.join(__dirname, '../public/assets') }),
  ],
};
