
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

var b = watchify(browserify({
	entries : './example/app.jsx',
	transform : [reactify],
}));

function bundle() {
	return b.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('bundle.js'))
			.pipe(rename(function (path) {
				path.extname = '.js';
				path.basename = 'app';
			}))
			.pipe(gulp.dest('./example/out'))
			.pipe(connect.reload());
}

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

// gulp.task('reload', function(callback) {
// 	connect.reload();
// 	return callback();
// });

gulp.task('default', ['js'], function() {

	gulp.watch('example/*.html', ['reload']);

	// 測試用伺服器
	connect.server({
		root : 'example',
		livereload : true,
		fallback : 'example/index.html',
		// middleware : function(connect, opt) {
		// 	return [
		// 		// 改寫 url 讓 SPA 在測試環境可以正常
		// 		function(req, res, next) {
		// 			if(/^\/admin/.test(req.url)) {
		// 				req.url = '/admin.html';
		// 			} else if(/^\/shopAdmin/.test(req.url)) {
		// 				req.url = '/shopAdmin.html';
		// 			}
		// 			return next();
		// 		},
		// 	];
		// }
	});
});
