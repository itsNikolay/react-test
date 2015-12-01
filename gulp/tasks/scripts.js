var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var config = require('../config');

var dependencies = [
  'react',
  'react/addons',
  'react-dom'
];
var scriptsCount = 0;

gulp.task('scripts', function() {
  bundleApp(false);
});

function bundleApp(isProduction) {
  scriptsCount++;
  var appBundler = browserify({
    entries: './src/app.js',
    debug: true
  });

  if (!isProduction && scriptsCount === 1){
    browserify({
      require: dependencies,
      debug: true
    })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(config.dist));
  }

  if (!isProduction){
    dependencies.forEach(function(dep){
      appBundler.external(dep);
    });
  }

  appBundler
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .on('error', gutil.log)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.dist));
}
