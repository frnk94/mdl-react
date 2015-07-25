var React = require('react');

module.exports = React.createClass({
	displayName : 'DocPage',
	render: function() {
		var style = {
			padding : '20px',
			width : '100%',
			maxWidth : '1200px',
			boxSizing: 'border-box',
		};
		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	},
});
