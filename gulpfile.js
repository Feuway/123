'use strict';

var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task("copy", function() {
    return gulp.src([
        "src/fonts/**/*.{woff,woff2}",
        "src/img/**",
        "src/js/**",
        "src/*.html"
    ])
        .pipe(gulp.dest("dest"));
});
   
gulp.task('style', function() {
    gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('dest/css'));
});