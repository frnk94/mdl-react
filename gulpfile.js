
// reference
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var gulp = require('gulp');
var source = require ('vinyl-source-stream');
var reactify = require ('reactify');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var browserify = require('browserify');
var watchify = require('watchify');

function bundleGenerator(isWatch) {
	var b = browserify({
		entries : './example/app.jsx',
		transform : [reactify],
	});
	if(isWatch) {
		b = watchify(b);
	}
	var bundle = function () {
		return b.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source('bundle.js'))
				.pipe(rename(function (path) {
					path.extname = '.js';
					path.basename = 'app';
				}))
				.pipe(gulp.dest('./example'))
				.pipe(connect.reload());
	}
	if(isWatch) {
		b.on('update', bundle); // on any dep update, runs the bundler
		b.on('log', gutil.log); // output build logs to terminal
	}
	return bundle;
}

gulp.task('js', bundleGenerator(true)); // so you can run `gulp js` to build the file

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'example',
		livereload : true,
		fallback : 'example/index.html',
	});
});
