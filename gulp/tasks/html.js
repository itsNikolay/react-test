var gulp = require('gulp');
var config = require('../config');

gulp.task('html', function() {
  gulp.src(config.srcHtml)
  .pipe(gulp.dest(config.dist));
});
