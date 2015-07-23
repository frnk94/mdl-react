var React = require('react');

/**
	CardSupportingText
		http://www.getmdl.io/components/index.html#cards-section
	Props
		width 		寬度(優先權大於 style 內的)
		height 		高度(優先權大於 style 內的)
		style 		css 設定
*/

var CardSupportingText = React.createClass({displayName: "CardSupportingText",

	getDefaultProps: function() {
		return {
			style : {},
		};
	},

	propTypes: {
		style : React.PropTypes.object,
		height : React.PropTypes.string,
		width : React.PropTypes.string,
	},

	render: function() {

		var style = this.props.style;

		style.height = this.props.height ? this.props.height : style.height;
		style.width = this.props.width ? this.props.width : style.width;
		
		return (
			React.createElement("div", {className: "mdl-card__supporting-text", style: style}, 
				this.props.children
			)
		);
	}

});

module.exports = CardSupportingText;