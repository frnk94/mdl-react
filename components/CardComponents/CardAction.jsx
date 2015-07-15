var React = require('react');
var cx = require('classnames');

var CardAction = React.createClass({

	render: function() {
		var classes = {
			'mdl-card__actions' : true,
		};

		if(this.props.border) {
			classes['mdl-card--border'] = true;
		}

		return (
			<div className={cx(classes)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = CardAction;