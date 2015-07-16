
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.Tooltip 
					text = 'This is a bird.'
				/>
			</div>
		);
	},

});
