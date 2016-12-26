'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.modules]
    })
    .transform(browserifyShim)
    .bundle()
    .pipe(source(gulpif(release, gulp.dest(config.paths.filenames.release.scripts), gulp.dest(config.paths.filenames.build.scripts))))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.scripts), gulp.dest(config.paths.dest.build.scripts)));
});
