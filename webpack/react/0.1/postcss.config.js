module.exports = {
  plugins: [
    require('autoprefixer')(({
      browsers: ['cover 99.5% in CN']
    })),
    require('postcss-px2rem')({remUnit: 75}),
  ],
  browserslist: [
    "iOS >= 6",
    "Android >= 4",
    "IE >= 9"
  ],
}
