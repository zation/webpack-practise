var path = require('path');

module.exports = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};