var React = require('react');

var CardTitle = React.createClass({

	render: function() {

		var style = this.props.style ? this.props.style : {};

		style.height = this.props.height ? this.props.height : style.height;
		style.width = this.props.width ? this.props.width : style.width;

		return (
			<div className="mdl-card__title" style={style}>
				<h2 className="mdl-card__title-text">
					{this.props.title}
				</h2>
			</div>
		);
	}

});

module.exports = CardTitle;