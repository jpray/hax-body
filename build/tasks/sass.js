var jspm = require('jspm');
var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths.js');
var config = require('../../jspm.config.js');
var path = require('path');
var appRoot = require('app-root-path');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

function importer(url, prev, done) {
    if (url.slice(0,5) === 'jspm:') {
        // Only transform strings prefixed with '~'
        System.normalize(url.slice(5)).then(function (normalized) {
            var filePath = normalized.replace(':', '/').replace('.js', '.scss').split('jspm_packages')[1];
            done({file: path.join(appRoot.path, 'jspm_packages', filePath)});
        }).catch(function(e){
            done(new Error(e));
        });
    } else {
        done({file: url});
    }
}
gulp.task('sass',function(){
     return gulp.src(['./'+paths.scss])
        .pipe(sass({
            outputStyle: 'compressed',
            importer: importer,
            includePaths: [
                './src'
            ]}).on('error', sass.logError))
        .pipe(autoprefixer())
         //.pipe(rename({dirname: ''}))
        //.pipe(gulp.dest(paths.output))
        .pipe(gulp.dest('./src'))
});

gulp.task('sass:myvoya-pweb-components',function(){
     return gulp.src(['./myvoya-pweb-components/src/pweb-header/pweb-header.scss'])
        .pipe(sass({
            outputStyle: 'compressed',
            importer: importer,
            includePaths: [
                './src',
                './myvoya-pweb-components'
            ]}).on('error', sass.logError))
        .pipe(autoprefixer())
         //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./myvoya-pweb-components/src/pweb-header/'))
});
