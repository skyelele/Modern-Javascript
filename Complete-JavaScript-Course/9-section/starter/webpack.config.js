const path = require('path');

module.exports = {
  entry: './src/js/index.js'
  // Where to save bundle file
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  node: 'development'
}