const gulp = require('gulp');
const rimraf = require('gulp-rimraf');

gulp.task('clean', () =>
  gulp.src('lib', { read: false })
    .pipe(rimraf())
);
