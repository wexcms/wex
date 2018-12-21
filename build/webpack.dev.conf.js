const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

//other
const HtmlWebpackPlugin = require('html-webpack-plugin');

//dev
const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV SETTINGS

  // Source map
  devtool: 'source-map',
  plugins: [
    //index en
    new HtmlWebpackPlugin({
      //* '../' - fix static folder for *.html files
      filename: 'index.html',
      template: 'src/index-en.pug',
      inject: false
    }),
    // index ru
    new HtmlWebpackPlugin({
      //* '../' - fix static folder for *.html files
      filename: 'ru.html',
      template: 'src/index-ru.pug',
      inject: false
    })
  ],
});

module.exports = new Promise((resolve, reject) => {

resolve(devWebpackConfig)

})
