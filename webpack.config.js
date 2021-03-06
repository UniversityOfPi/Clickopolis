var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/img', to: './dist/img' },
      { from: './src/index.html', to: './dist/index.html' },
      { from: './node_modules/store/store.js', to: './dist/scripts/store.js' }
    ])
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
    ]
  },
  watch: true
}
