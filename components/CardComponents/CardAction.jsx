var React = require('react');
var cx = require('classnames');

/**
	CardAction
		http://www.getmdl.io/components/index.html#cards-section
	Props
		width 		寬度(優先權大於 style 內的)
		height 		高度(優先權大於 style 內的)
		style 		css 設定
		border 		是否使用預設的 border
*/

var CardAction = React.createClass({

	getDefaultProps: function() {
		return {
			style : {},
			border : false,
		};
	},

	propTypes: {
		style : React.PropTypes.object,
		height : React.PropTypes.string,
		width : React.PropTypes.string,
		border : React.PropTypes.bool,
	},

	render: function() {
		var classes = {
			'mdl-card__actions' : true,
		};

		if(this.props.border) {
			classes['mdl-card--border'] = true;
		}

		var style = this.props.style;

		style.height = this.props.height ? this.props.height : style.height;
		style.width = this.props.width ? this.props.width : style.width;

		return (
			<div className={cx(classes)} style={style}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = CardAction;