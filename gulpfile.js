var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var run = require('gulp-run');
var gutil = require('gulp-util');

var paths = {
    pages: ['src/*.html']
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('compilets', function() {
    return tsProject.src()
        /*
        .pipe(tslint({
            formatter: 'verbose',
            fix: true
        }))
        .pipe(tslint.report())
        */
        .pipe(tsProject()).js
        /*
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        */
        .pipe(gulp.dest('dist'));
});

gulp.task('exects', function() {
    return run('echo Typescript Output: && node ./dist/index.js').exec();
});

gulp.task('streamts', function () {
    return gulp.watch('src/**/*.ts', gulp.series('compilets', 'exects'));
});

gulp.task('start-streamts', function() {
    return gulp.series('copy-html', 'compilets', 'exects', 'streamts')();
});

gulp.task('execjs', function() {
    return run('echo Javascript Output: && node ./dist/example.js').exec();
});

gulp.task('streamjs', function () {
    return gulp.watch('dist/**/*.js', gulp.series('execjs'));
});

gulp.task('start-streamjs', function() {
    return gulp.series('execjs', 'streamjs')();
});

gulp.task('default', gulp.series('copy-html', 'compilets', 'exects'));