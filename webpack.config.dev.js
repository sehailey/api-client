module.exports = {
  entry: { app: ['@babel/polyfill', './src/index.js'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://localhost:1337'
    }
  }
}
