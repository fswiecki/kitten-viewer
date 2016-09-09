const path = require('path');

module.exports = {
  entry: [
    './react/scripts/index.js'
  ],
  output: {
    path: path.join(__dirname, '/react/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
