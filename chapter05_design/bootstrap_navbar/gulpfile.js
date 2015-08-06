var gulp = require('gulp');
var eslint = require('gulp-eslint');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('lint', function () {
    return gulp.src(['client_source/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('build', function() {
    gulp.src('client_source/app.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./client/'))
});

gulp.task('default', ['lint', 'build'], function () {});
