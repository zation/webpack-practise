var path = require('path');
var webpack = require('webpack');

var config = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel'
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

module.exports = config;