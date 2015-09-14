var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
};