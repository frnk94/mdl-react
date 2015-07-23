var React = require('react');

/**
	CardMenu
		http://www.getmdl.io/components/index.html#cards-section
	Props
		style 		css 設定
*/

var CardMenu = React.createClass({displayName: "CardMenu",

	getDefaultProps: function() {
		return {
			style : {},
		};
	},

	propTypes: {
		style : React.PropTypes.object,
	},

	render: function() {
		return (
			React.createElement("div", {className: "mdl-card__menu", style: this.props.style}, 
				this.props.children
			)
		);
	}

});

module.exports = CardMenu;