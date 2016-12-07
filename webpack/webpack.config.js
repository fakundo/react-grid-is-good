const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const devServerPort = 8888;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + devServerPort,
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '..', 'examples')
  ],
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: [
    new NyanProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'examples', 'index.html'),
      inject: true,
      hash: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot',
        exclude: /node_modules/
      }
    ]
  }
};
