
var chai = require('chai');
global.expect = chai.expect;

var jquery = require('jquery');
global.jquery = global.$ = jquery;

var React = require('react');
global.React = React;

before('load', function(done) {
	console.log('before');
	jquery.getScript("https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js", done);
});
