
"use strict";

var React = require('react');
var MDL = require('../../components');
var Props = require('../document/Props.jsx');

module.exports = React.createClass({

	render: function() {
		var propsDetail = [

		];

		var style = {
			width : '100%',
			maxWidth : '1200px',
		};

		return (
			<div style={style}>
				<MDL.Card style={cardStyle} shadow={6}>
				<MDL.Tooltip 
					text = 'This is a bird.'
				/>
				</MDL.Card>
				<Props detail={propsDetail} title="Props" />
			</div>
		);
	},

});
