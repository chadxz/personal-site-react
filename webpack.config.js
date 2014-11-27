'use strict';
var path = require('path');

module.exports = {
  entry: './app/js/app.jsx',
  output: {
    // the name of the file to be built
    filename: './app/bundle.js',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  resolve: {
    // allows you to require('file') instead of 'file.jsx'
    extensions: ['', '.js', '.jsx']
  }
};
