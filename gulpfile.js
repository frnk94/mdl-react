
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
var uglify = require('gulp-uglify');
var assign = require('lodash').assign;

function bundleGenerator(isWatch) {
	var opts = assign({}, watchify.args, {
		entries : './example/app.jsx',
		transform : [reactify],
	});
	var b = browserify(opts);
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

// so you can run `gulp js` to build the file
gulp.task('js', bundleGenerator(true));

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'example',
		livereload : true,
		fallback : 'example/index.html',
	});
});

gulp.task('compress', function() {
	return gulp.src('example/app.js')
	.pipe(uglify({
		compress : true,
	}).on('error', gutil.log))
	.pipe(rename(function (path) {
		path.extname = '.js';
		path.basename = 'app.page';
	}))
	.pipe(gulp.dest('example/'));
});
