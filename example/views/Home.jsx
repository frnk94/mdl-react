
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	render: function() {

		var headerItems = [
			{ text : 'link1', href : '#' }
		];

		return (
			<div>
				<MDL.LayoutFixHeader
					title='mdl-react'
					headerItems={headerItems}
				/>
			</div>
		);
	},

});
