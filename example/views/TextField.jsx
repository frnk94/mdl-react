
"use strict";

var React = require('react');
var MDL = require('../../index.js');

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<MDL.TextField
					labelText='test lable text'
					errorText='test error text'
					defaultValue='test default value'
				/><br />
				<MDL.TextField
					labelText='input digits with error text'
					errorText='plz input digits'
					pattern='[0-9]*'
				/><br />
				<MDL.TextField
					labelText='test floating lable text'
					errorText='test error text'
					defaultValue='test default value'
					floatingLabel={true}
				/>
			</div>
		);
	},

});
