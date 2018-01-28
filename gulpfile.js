var gulp = require('gulp'),
    sass = require('gulp-sass'),
    mustache = require('gulp-mustache-inverted');

gulp.task('html', function() {
    gulp.src('./**/*.html');
});

gulp.task('css', function() {
    gulp.src('./css/*.css');
});

gulp.task('json', function() {
    gulp.src('./**/*.json');
});

gulp.task('sass', function() {
    gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('mustache', function() {
    gulp.src('./*.mustache')
        .pipe(mustache('./resume-data.json', {extension: '.html'}))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.html', ['html']);
    gulp.watch('./**/*.css', ['css']);
    gulp.watch('./**/*.json', ['json', 'mustache']);
    gulp.watch('./**/*.scss', ['sass']);
    gulp.watch('./**/*.mustache', ['mustache']);
});

gulp.task('default', ['watch', 'html', 'css', 'json', 'sass', 'mustache']);
