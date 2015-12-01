var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.srcJs, ['scripts']);
  gulp.watch(config.srcScss, ['scss']);
  gulp.watch(config.srcHtml, ['html']);
});
