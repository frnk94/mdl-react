var React = require('react');

var Grid = React.createClass({

	propTypes: {
		style : React.PropTypes.object,
	},

	render: function() {
		return (
			<div className="mdl-grid" style={this.props.style}>{this.props.children}</div>
		);
	}

});

module.exports = Grid;