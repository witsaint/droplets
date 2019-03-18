// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      { test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader?-autoprefixer', options: { importLoaders: 1 } },
          {
            loader: 'less-loader',  //
            options: {
              importLoaders: 1
            }
          }
        ],
        // include: path.join(__dirname, 'src'), //限制范围，提高打包速度
        exclude: /node_modules/
      }
    ],
  },
};
