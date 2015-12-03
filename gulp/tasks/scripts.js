var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

var config = require('../config');

var dependencies = {
  'react': './bower_components/react/react.min',
  'react-dom': './bower_components/react/react-dom.min',
  'marked': './bower_components/marked'
};
var scriptsCount = 0;

gulp.task('scripts', function() {
  bundleApp();
});

function bundleApp() {
  scriptsCount++;
  var appBundler = browserify({
    entries: './src/app.js',
    debug: true
  });

  if (scriptsCount === 1){
    var vendorBundle = browserify({debug: true});

    for (var prop0 in dependencies) {
      vendorBundle.require(dependencies[prop0], { expose: prop0 });
    }

    vendorBundle
    .bundle()
    .on('error', gutil.log)
    .pipe(source('vendors.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.dist));
  }

  for (var prop1 in dependencies) {
    appBundler.external(prop1);
  }

  appBundler
  .on('error', gutil.log)
  .transform(babelify, {presets: ["es2015", "react"], ignore: /(node_modules|bower_components|shims)/})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.dist));
}
