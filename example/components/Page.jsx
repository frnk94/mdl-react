var React = require('react');

var ComponentPage = React.createClass({

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
	}

});

module.exports = ComponentPage;
