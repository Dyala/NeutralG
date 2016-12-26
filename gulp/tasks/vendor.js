'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');

module.exports = gulp.task('vendor', function () {
  return gulp.src(config.paths.src.external)
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.external), gulp.dest(config.paths.dest.build.external)));
});
