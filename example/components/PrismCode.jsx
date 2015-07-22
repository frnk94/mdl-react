
'use strict';

var MDL = require('../../components/');
var React = require('react');

var PrismCode = React.createClass({
	render: function() {
		return (
			<MDL.PrismCode {...this.props} />
		);
	},
});

module.exports = PrismCode;
