import gulp from "gulp";
import ts from "gulp-typescript";
const tsProject = ts.createProject("tsconfig.json");
import sourcemaps from "gulp-sourcemaps";
import tslint from "gulp-tslint";
import run from "gulp-run";
import gutil from "gulp-util";

gulp.task("lintts", () => {
    return tsProject.src()
        .pipe(tslint({
            fix: true,
            formatter: "verbose",
        }))
        .pipe(tslint.report());
});

gulp.task("compilets", () => {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("src"));
});

gulp.task("exects", () => {
    return run("echo Typescript Output: && node ./src/index.js").exec();
});

gulp.task("streamts", () => {
    return gulp.watch("src/**/*.ts", gulp.series("compilets", "exects"));
});

gulp.task("start-streamts", gulp.series("compilets", "exects", "streamts"));

gulp.task("execjs", () => {
    return run("echo Javascript Output: && node ./src/example.js").exec();
});

gulp.task("streamjs", () => {
    return gulp.watch("src/**/*.js", gulp.series("execjs"));
});

gulp.task("start-streamjs", gulp.series("execjs", "streamjs"));

gulp.task("default", gulp.series("compilets", "exects"));
