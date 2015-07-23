
"use strict";

var React = require('react');

var Icon = React.createClass({displayName: "Icon",

	propTypes: {
		children : React.PropTypes.string.isRequired,
		style : React.PropTypes.object,
	},

	render: function() {
		var style = this.props.style || {};
		if(!style.fontSize) {
			style.fontSize = 'inherit';
		}
		return (
			React.createElement("span", {className: "material-icons", 
			style: style}, 
				this.props.children
			)
		);
	},

});

module.exports = Icon;
