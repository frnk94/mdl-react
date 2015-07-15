"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {

		var style = {
			width : '100px',
			margin : '20px',
		};

		var titleStyle = {
			color: '#ffffff',
			background: 'url("http://i.imgur.com/EJFxjMX.jpg") center / cover',
		};

		return (
			<div>
				<MDL.Card style={style} width='512' height='auto'>
					<MDL.CardTitle title="Welcome" height='176' style={titleStyle} />
					<MDL.CardSupportingText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
					</MDL.CardSupportingText>
					<MDL.CardAction border={true}>
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							Get Started
						</a>
					</MDL.CardAction>
				</MDL.Card>
			</div>
		);
	},

});