
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		var btnStyle = {
			margin: '5px',
			display: 'inline-block',
		};
		return (
			<div style={{padding:'20px'}}>
				<MDL.Card shadow={4} style={{
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
					<p>
						<MDL.Button type="RaisedButton" >
							<a href='http://fandora.github.io/mdl-react/' style={btnStyle}>GitHub</a>
						</MDL.Button>
						<MDL.Button type="RaisedButton" isAccent={true} >
							<a href='#layout' style={btnStyle}>Components</a>
						</MDL.Button>
					</p>
				</MDL.Card>
			</div>
		);
	},

});
