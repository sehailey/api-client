const path = require('path')
//const CleanWebpackPlugin = require('clean-webpack-plugin')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { app: ['@babel/polyfill', './src/index.js'] },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
