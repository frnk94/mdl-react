// DocSubtitle.jsx

var React = require('react');

module.exports = React.createClass({

	render: function() {

		var exampleStyle = {
			color: '#e0e0e0',
			padding: '8px',
			marginBottom: '0px',
			fontSize: '14px',
			lineHeight: '20px',
			letterSpacing: '0px',
			textTransform: 'uppercase',
			fontWeight: 500,
		};

		return (
			<div style={exampleStyle}>{this.props.title}</div>
		);
	}

});

