
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {
		return (
			<div> 
				<MDL.Loading 
					singleColor={false}
				/> 
			</div>
		);
	},

});
