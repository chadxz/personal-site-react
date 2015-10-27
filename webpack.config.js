'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/js/app.jsx',
  output: {
    // the name of the file to be built
    path: path.join(__dirname, 'app-dist'),
    filename: 'production.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.join(__dirname, 'app/js'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    // allows you to require('file') instead of 'file.jsx'
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // fix weird inclusion of all languages when requiring moment
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-GB/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: false }),
    new webpack.ProvidePlugin({
      'es6-promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    })
  ]
};
