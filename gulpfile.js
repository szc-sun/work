var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require("gulp-cssnano");

gulp.task('sass',function(){
	gulp.src('./src/scss/listpage.scss').pipe(sass()).pipe(gulp.dest('./dist/css'));
})
gulp.task('default',function(){
	gulp.watch(['./src/scss/.*scss'],['scss']);
})
