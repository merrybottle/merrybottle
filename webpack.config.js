const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      shared: path.resolve(__dirname, './src/shared')
    }
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      favicon: path.resolve(__dirname, './src/favicon.ico')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './docs'),
    hot: true
  }
};
