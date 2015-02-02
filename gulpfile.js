'use strict';
var gulp = require('gulp');
var replace = require('gulp-replace');
var cssFilter = require('gulp-filter')('**/*.css');
var useref = require('gulp-useref');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');

var del = require('del');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var buildDestination = 'app-dist';

gulp.task('clean', function (callback) {
  var cleanPattern = [
    buildDestination + '/fonts/**',
    buildDestination + '/images/**',
    buildDestination + '/index.html',
    buildDestination + '/production.css',
    buildDestination + '/production.js'
  ];

  del(cleanPattern, { force: true }, callback);
});

gulp.task('copy-fonts', ['clean'], function () {
  return gulp.src('app/bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('app-dist/fonts/'));
});

gulp.task('copy-images', ['clean'], function () {
  return gulp.src('app/images/*')
    .pipe(gulp.dest('app-dist/images/'));
});

gulp.task('build-css-html', ['clean'], function () {
  // read build: statements from html
  // and transform them with other gulp plugins
  var assets = useref.assets();
  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(cssFilter)
    .pipe(replace('../fonts', 'fonts'))
    .pipe(minifyCSS())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('app-dist'));
});

gulp.task('build-js', ['clean'], function (callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError("[build-js]", err);
    }

    gutil.log("[build-js]", stats.toString({ colors: true }));
    callback();
  });
});

gulp.task('build', ['clean', 'build-js', 'build-css-html', 'copy-fonts', 'copy-images']);
