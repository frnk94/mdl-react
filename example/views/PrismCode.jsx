
"use strict";

var React = require('react');
var MDL = require('../../components');

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
