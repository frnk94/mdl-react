var React = require('react');

var CardMenu = React.createClass({

	render: function() {
		return (
			<div className="mdl-card__menu">
				{this.props.children}
			</div>
		);
	}

});

module.exports = CardMenu;