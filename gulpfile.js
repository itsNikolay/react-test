var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();

var srcJs = 'src/**/*.js';
var srcHtml = 'src/**/*.html';
var dist = "dist"

gulp.task('default', ['copy', 'watch', 'js', 'browser-sync']);

gulp.task('copy', function() {
  return gulp.src(srcHtml)
  .pipe(gulp.dest(dist))
});

gulp.task('js', function() {
  return gulp.src(srcJs)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
  gulp.watch(srcJs, ['js']);
  gulp.watch(srcHtml, ['copy']);
  gulp.watch("src/**/*.{js,css,html}").on('change', browserSync.reload);
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});
