const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    chunkFilename: 'static/js/[name].[contenthash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
