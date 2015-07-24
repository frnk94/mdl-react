
var jsdom = require('node-jsdom');

var React = require('react/addons');
global.React = React;

var chai = require('chai');
global.expect = chai.expect;

console.log('loaded jsdom');
jsdom.env(
	'<!doctype html><html><head></head><body></body></html>',
	["https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js"],
	function (errors, window) {
		// set globals for mocha that make access to document and window feel
		// natural in the test environment
		global.document = window.document;
		global.window = window;
		// take all properties of the window object and also attach it to the
		// mocha global object
		propagateToGlobal(window);
		// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
		function propagateToGlobal (window) {
			for (var key in window) {
				// console.log('key %s', key);
				if (!window.hasOwnProperty(key)) continue;
				if (key in global) continue;
				global[key] = window[key];
			}
		}
		/////////////////////////
		console.log('check window %s', window);
		console.log('check navigator %s', navigator);
		console.log('check componentHandler', componentHandler);
		// load jQuery
		var jQuery = require('jquery');
		global.jQuery = jQuery;
		global.$ = jQuery;
	}
);


before('wait for 1 secs', function(done) {
	setTimeout(done, 1000);
});

describe('nop', function() {
	it('nop', function(done) {
		return done();
	});
});
