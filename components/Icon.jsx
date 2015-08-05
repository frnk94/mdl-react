
"use strict";

var React = require('react');

module.exports = React.createClass({

	displayName : 'MDL:Icon',

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
			<span className='material-icons'
			style={style} >
				{this.props.children}
			</span>
		);
	},

});
