'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const LessPrefix = require('less-plugin-autoprefix');

const LESSOPTIONS = {
  plugins: [
    new LessPrefix({
      browsers: "> 1%, last 2 versions, Firefox ESR"
    })
  ]
};

/**
 * @desc Compile .less files to .css
 */
gulp.task('css', () => {
  return gulp.src('src/less/main.less')
    .pipe(less(LESSOPTIONS))
    .pipe(gulp.dest('src/css'));
});

gulp.task('server', ['css'], () => {
  gulp.watch('src/less/**/*.less', ['css'])

  require('./server.js');
});
