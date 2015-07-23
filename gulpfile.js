
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

function bundleGenerator(path, dest, name, isWatch) {
	var opts = assign({}, watchify.args, {
		entries : path,
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
					path.basename = name;
				}))
				.pipe(gulp.dest(dest))
				.pipe(connect.reload());
	}
	if(isWatch) {
		b.on('update', bundle); // on any dep update, runs the bundler
		b.on('log', gutil.log); // output build logs to terminal
	}
	return bundle;
}

// so you can run `gulp js` to build the file
gulp.task('js', bundleGenerator('./example/app.jsx','./example',  'app', true));
gulp.task('js:nowatch', bundleGenerator('./example/app.jsx', './example', 'app', false));
gulp.task('js:release', bundleGenerator('./components/index.js', './lib', 'index', false));

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'example',
		livereload : true,
		fallback : 'example/index.html',
	});
});

gulp.task('server', function() {
	connect.server({
		root : 'example',
		fallback : 'example/index.html',
	});
});

gulp.task('compress', ['js:nowatch'], function() {
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

var react = require('gulp-react');
gulp.task('release', function () {
    return gulp.src('components/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('lib'));
});

// gulp.task('release', ['js:release'], function() {
// 	return gulp.src('lib/index.js')
// 	.pipe(uglify({
// 		compress : true,
// 	}).on('error', gutil.log))
// 	.pipe(rename(function (path) {
// 		path.extname = '.js';
// 		path.basename = 'index';
// 	}))
// 	.pipe(gulp.dest('lib/'));
// });
