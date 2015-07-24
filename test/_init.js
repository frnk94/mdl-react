
var jsdom = require('node-jsdom');

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
var win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
	for (var key in window) {
		// console.log('key %s', key);
		if (!window.hasOwnProperty(key)) continue;
		if (key in global) continue;
		global[key] = window[key];
	}
}

console.log('loaded jsdom');
console.log('check window %s', window);
console.log('check document %s', document);
console.log('check navigator %s', navigator);

// console.log('enable jsx loader');
// require('node-jsx').install({extension: '.jsx'});

var React = require('react/addons');
global.React = React;
// var TestUtils = React.addons.TestUtils;
// global.TestUtils = TestUtils;

var jQuery = require('jquery');
global.jQuery = jQuery;
global.$ = jQuery;
// console.log(jQuery);

var chai = require('chai');
global.expect = chai.expect;
// global.assert = chai.assert;
