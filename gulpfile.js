var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css');

gulp.task('default', function () {
     gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('app/'));
});