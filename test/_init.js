
var jsdom = require('node-jsdom');

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>');

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

var React = require('react/addons');
global.React = React;

var jQuery = require('jquery');
global.jQuery = jQuery;
global.$ = jQuery;

function loadJavascript(src, fname) {
	var vm = require('vm');
	var fs = require('fs');
	var code = fs.readFileSync(src, 'utf-8');
	vm.runInThisContext(code, {
		filename : fname,
	});
}

loadJavascript('./node_modules/material-design-lite/material.js', 'material.js');
loadJavascript('./example/js/classList.min.js', 'classList.min.js');
console.log('componentHandler', componentHandler);

///////////////////

var chai = require('chai');
global.expect = chai.expect;
