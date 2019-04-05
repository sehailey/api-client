const webpack = require('webpack')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev? 'development' : 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    port: 3001,
    historyApiFallback: true,
    allowedHosts: [
      'localhost',
    ],
    proxy: {
      '/api': 'http://localhost:1337',
    },
  },
}
