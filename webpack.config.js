'use strict';
var webpack = require('webpack');

module.exports = {
  entry: './app/js/app.jsx',
  output: {
    // the name of the file to be built
    filename: './app-dist/production.js',
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
  },
  plugins: [
    // fix weird inclusion of all languages when requiring moment
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-GB/)
  ]
};
