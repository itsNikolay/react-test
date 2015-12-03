var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var config = require('../config');

var dependencies = {
  'react': './bower_components/react/react.min',
  'react-dom': './bower_components/react/react-dom.min',
  'marked': './bower_components/marked'
};
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
      debug: true
    })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(config.dist));
  }

  for (var prop in dependencies) {
    appBundler.require(dependencies[prop], { expose: prop });
  }

  appBundler
  .transform(babelify, {presets: ["es2015", "react"], ignore: /(node_modules|bower_components|shims)/})
  .bundle()
  .on('error', gutil.log)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.dist));
}
