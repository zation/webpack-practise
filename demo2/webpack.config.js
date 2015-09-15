var path = require('path');
var webpack = require('webpack');
var argv = require('node-argv');

var args = argv(process.argv.slice(2)).options;

var config = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  devServer: {
    inline: true
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
};

if(args.minify) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }));
}

module.exports = config;