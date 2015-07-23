
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div style={{padding:'20px'}}>
				<MDL.Card style={{
					margin : '0 auto',
					maxWidth : '600px',
					width : '100%',
					padding : '20px',
					textAlign : 'center',
				}}>
					<h1 className='mdl-color-text--grey-800'>mdl-react</h1>
					<h5 className='mdl-color-text--grey-600'>
						Google's Material Design Lite + FB's React
					</h5>
					<MDL.Button type="RaisedButton" >
						<a href='http://fandora.github.io/mdl-react/'>GitHub</a>
					</MDL.Button>
					<MDL.Button type="RaisedButton">
						<a href='#layout'>Components</a>
					</MDL.Button>
				</MDL.Card>
			</div>
		);
	},

});
