

var React = require('react');

var Footer2 = React.createClass({

	propTypes: {
		leftItems : React.propsType.shape({
			type : React.PropTypes.oneOf(['list', 'button']).isRequired,
			items : React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
			logo : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]),
		}),
		rightItems : ,
	},

	render: function() {
		return (
			<div />
		);
	}

});

module.exports = Footer2;
