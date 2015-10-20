var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var srcJs = 'src/**/*.js';
var srcHtml = 'src/**/*.html';
var srcScss = 'src/**/*.scss';
var dist = "dist"

gulp.task('default', ['copy', 'watch', 'js', 'scss', 'browser-sync']);

gulp.task('copy', function() {
  gulp.src(srcHtml)
  .pipe(gulp.dest(dist))
});

gulp.task('js', function() {
  gulp.src(srcJs)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(dist));
});

gulp.task('scss', function() {
  gulp.src(srcScss)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
  gulp.watch(srcJs, ['js']);
  gulp.watch(srcScss, ['scss']);
  gulp.watch(srcHtml, ['copy']);
  gulp.watch("src/**/*.{js,scss,html}").on('change', browserSync.reload);
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});
