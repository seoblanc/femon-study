const gulp = require("gulp");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require("gulp-plumber");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();
const del = require('del');

const entry = require('./webpack/entry');

const paths = {
  root: '/',
  src: './src/js',
  build: './build'
};

// js
function scripts() {
  return (
    gulp
      .src([paths.src+'/*'])
      .pipe(plumber())
      .pipe(webpackStream(webpackConfig, webpack))
      // .pipe(babel())
      .pipe(uglify({}))
      .pipe(gulp.dest(paths.build))
  );
}

function clean() {
  return del(paths.build);
}

const js = gulp.series(scripts);
const build = gulp.series(clean, gulp.parallel(js));

exports.js = js;
exports.build = build;
exports.default = build;