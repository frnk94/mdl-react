// DocTitle.jsx

var React = require('react');

module.exports = React.createClass({

	render: function() {
		var titleStyle = {
			fontSize: '24px',
			lineHeight: '32px',
			paddingTop: '16px',
			marginBottom: '12px',
			marginTop: '0px',
			letterSpacing: '0px',
			fontWeight: 400,
			color: 'rgba(0, 0, 0, 0.87)',
		};
		return (
			<h2 style={titleStyle}>{this.props.title}</h2>
		);
	}

});
