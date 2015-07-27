
var chai = require('chai');
global.expect = chai.expect;

var jquery = require('jquery');
global.jquery = global.$ = jquery;

before('load', function(done) {

	console.log('load mdl');
	jquery.getScript("https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js");

	// console.log('load react');
	// jquery.getScript("https://fb.me/react-0.13.3.js");

	console.log('add test div to body');
	$('<div id="test"></div>').appendTo(document.body);

	setTimeout(done, 1000);

});

describe('test', function() {
	it('test', function() {
		console.log(typeof document.getElementById('test'));
		console.log(typeof document.getElementById('test').click);
	});
});
