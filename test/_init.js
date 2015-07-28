
var chai = require('chai');
global.expect = chai.expect;

var jquery = require('jquery');
global.jquery = global.$ = jquery;

var React = require('react/addons');
global.React = React;

global.mouseClick = function mouseclick( element ) {
	// create a mouse click event
	var ev = document.createEvent( 'MouseEvents' );
	ev.initMouseEvent( 'click', true, true, window, 1, 0, 0 );
	// send click to element
	element.dispatchEvent(ev);
}

before('load', function(done) {
	console.log('load mdl');
	jquery.getScript("https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js");
	// console.log('load react');
	// jquery.getScript("https://fb.me/react-0.13.3.js");
	console.log('add test div to body');
	// $('<div id="test"></div>').appendTo(document.body);
	setTimeout(done, 1000);
});

describe('check global', function() {

	it('make sure componentHandler existed', function() {
		expect(componentHandler).a('object');
		expect(componentHandler.upgradeDom).a('function');
	});

});
