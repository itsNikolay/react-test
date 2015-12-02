var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });

  gulp.watch("dist/**/*.{js,jsx,scss,html}").on('change', browserSync.reload);
});
