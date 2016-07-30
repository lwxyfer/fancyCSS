var gulp = require('gulp');
var minify = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('build', function () {
  gulp.src(['fancyCss.css','css/*.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minify())
    .pipe(rename({
     suffix:'.min'
    }))
    .pipe(gulp.dest('dist'))
});
