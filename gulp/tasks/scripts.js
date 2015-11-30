var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var config = require('../config');

gulp.task('js', function() {
  gulp.src(config.srcJs)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(config.dist));
});
