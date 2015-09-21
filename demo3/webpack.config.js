var path = require('path');

var config = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\/images\//,
      loader: 'file'
    }, {
      test: /\/icons\//,
      loader: 'url'
    }]
  }
};

module.exports = config;