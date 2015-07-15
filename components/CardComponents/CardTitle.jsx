var React = require('react');

/**
	CardTitle
		http://www.getmdl.io/components/index.html#cards-section
		若輸入的是純字串則會自動套入標題樣式，若不是(ex: <h4>標題</4>)則直接嵌入內容
	Props
		width 		寬度(優先權大於 style 內的)
		height 		高度(優先權大於 style 內的)
		style 		css 設定
*/

var CardTitle = React.createClass({

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

		var titleText = typeof this.props.children == 'string' ? (<h2 className="mdl-card__title-text">{this.props.children}</h2>) : (this.props.children);

		return (
			<div className="mdl-card__title" style={style}>
				{titleText}
			</div>
		);
	}

});

module.exports = CardTitle;