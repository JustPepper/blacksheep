'use strict';

var gulp 	= require('gulp'),
	path    = require('path'),
	stylus 	= require('gulp-stylus'),
	booo 	= require('booo'),
	connect = require('gulp-connect'),
	notify	= require('gulp-notify'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	concat 	= require('gulp-concat');

/* Server */
gulp.task('connect', function() {
	connect.server({
		"root": './',
		"livereload": true
	})
});

/* Live Reload */
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());
});
gulp.task('js', function() {
	gulp.src('./js/*.js')
		.pipe(connect.reload());
});

/* Stylus */
gulp.task('compile', function() {
	gulp.src('./css/main.styl')
		.pipe(plumber())
		.pipe(stylus({ use: booo() }))
		.on('error', notify.onError({
			"title": "Stylus notification",
			"message": "Error compiling!"
		}))
		.pipe(gulp.dest('./css'))
		.pipe(notify({
			"title": "Stylus",
			"message": "Stylus Compiled!"
		}))
		.pipe(connect.reload())
});

/* Prefixer */
gulp.task('prefix', function () {
	return gulp.src('./css/main.css')
		.pipe(autoprefixer({
			browsers: ['> 5%', 'last 3 iOS versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'));
});


/* Concat */
gulp.task('scripts', function() {
  return gulp.src('./js/lib/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./js/dist/'));
});

/* Watch */
gulp.task('watch', function() {
	gulp.watch(['./*.html'], ['html']);
	gulp.watch(['./js/*.js'], ['js']);
	gulp.watch('./css/**/*.styl', ['compile']);
	gulp.watch('./css/main.css', ['prefix']);
});


gulp.task('default', ['connect', 'watch']);