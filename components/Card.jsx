var React = require('react');
var cx = require('classnames');

/**
	Card
		http://www.getmdl.io/components/index.html#cards-section
	Props
		shadow 		陰影的大小(只能填 2, 3, 4, 6, 8, 16)
		width 		寬度(優先權大於 style 內的)
		height 		高度(優先權大於 style 內的)
		style 		css 設定
*/

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			style : {},
		};
	},

	propTypes: {
		shadow : React.PropTypes.oneOf([ 2, 3, 4, 6, 8, 16 ]),
		style : React.PropTypes.object,
		height : React.PropTypes.string,
		width : React.PropTypes.string,
	},

	render: function() {

		var classes = {
			'mdl-card' : true,
		};

		classes['mdl-shadow--' + this.props.shadow + 'dp'] = true;

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
