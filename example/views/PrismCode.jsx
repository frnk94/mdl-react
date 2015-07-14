
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.PrismCode
					src='http://fandora.github.io/mdl-react/components/TextField.jsx'
					lang='jsx'
				/>
			</div>
		);
	},

});
