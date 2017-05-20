/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var watch = require('gulp-watch');
var pxtorem = require('gulp-pxtorem');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var svgstore = require('gulp-svgstore');
var include = require("gulp-include");

gulp.task('svgstore', function () {
    return gulp
        .src('images/svg/**/*.svg', { base: 'src/svg' })
        .pipe(rename(function (path) {
            var name = path.dirname.split(path.sep);
            name.push(path.basename);
            path.basename = name.join('-');
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('images'));
});

gulp.task('pxtorem', function () {
    gulp.src('./css/**/*.css')
        .pipe(pxtorem())
        .pipe(gulp.dest('css'));
});

// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './app.js' ], server.restart );
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(pxtorem())
      .pipe(gulp.dest('./css'))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('./css'));
});

gulp.task('styles', function () {
    return gulp
        .src('sass/site.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('scripts', function () {
    return gulp.src('./js/scripts/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['sass', 'scripts', 'svgstore' ], function () {
    // place code for your default task here
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/scripts/*.js', ['scripts']);
    gulp.watch('./images/svg/**/*.svg', ['svgstore']);
});

