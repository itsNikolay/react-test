var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('scss', function() {
  gulp.src(config.srcScss)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(config.dist));
});
