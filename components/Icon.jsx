
"use strict";

var React = require('react');

var Icon = React.createClass({

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
			<i className='material-icons'
			style={style} >
				{this.props.children}
			</i>
		);
	},

});

module.exports = Icon;
