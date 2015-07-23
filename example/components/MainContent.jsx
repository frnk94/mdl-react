var React = require('react');

module.exports = React.createClass({

	render: function() {
		var style = {
			padding : '60px 0px',
			marginBottom : '40px',
			borderBottom : '1px solid #E0E0E0',
			lineHeight : '20px',
		};

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}

});