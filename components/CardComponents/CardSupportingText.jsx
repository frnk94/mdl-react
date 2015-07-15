var React = require('react');

var CardSupportingText = React.createClass({

	render: function() {

		var style = this.props.style ? this.props.style : {};

		style.height = this.props.height ? this.props.height : style.height;
		style.width = this.props.width ? this.props.width : style.width;
		
		return (
			<div className="mdl-card__supporting-text" style={style}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = CardSupportingText;