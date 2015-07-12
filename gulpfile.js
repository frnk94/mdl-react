
var gulp = require('gulp');
var source = require ('vinyl-source-stream');
var reactify = require ('reactify');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var browserify = require('browserify');

gulp.task('default', function () {
	// set up the browserify instance on a task basis
	var b = browserify({
		entries : './index.js',
		transform : [reactify],
	});
	return b.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('bundle.js'))
			.pipe(rename(function (path) {
				path.extname = '.js';
				path.basename = 'mdl-react';
			}))
			.pipe(gulp.dest('./'));
});
