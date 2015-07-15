
var React = require('react');
var cx = require('classnames');

/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		icon: isRequired, Button的Icon，請使用 MDL Icon Component
 *		menuList: isRequired, Array of Object, Object can contains 4 propetires:
 *			text, isRequired, must be String or React Component
 *			events, Object, propetires should be React events
 *			style, Object, 選項個別CSS樣式
 *			isDiasbled, bool, 是否關閉選項
 *		fromRightToLeft: Meun展開動畫是否從左到又, default false
 *		fromBottomToTop: Meun展開動畫是否從下到上, default false
 *		isRipple: 是否使用Ripple動畫，default true
 *		style: Object, Menu整體CSS樣式
 */

var id = 1;

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			style: {},
			fromRightToLeft: false,
			fromBottomToTop: false,
			isRipple: true,
		};
	},

	propTypes: {
		icon: React.PropTypes.element.isRequired,
		style: React.PropTypes.object,
		fromRightToLeft: React.PropTypes.bool,
		fromBottomToTop: React.PropTypes.bool,
		isRipple: React.PropTypes.bool,
		menuList: React.PropTypes.arrayOf(React.PropTypes.shape({
			text: React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			events: React.PropTypes.object,
			style: React.PropTypes.object,
		})).isRequired,
	},

	id: 'mdl-menu-',

	componentWillMount: function() {
		this.id += id++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getClasses: function() {

		var classes = {
			"mdl-menu": true,
			"mdl-js-menu": true,
			"mdl-js-ripple-effect": this.props.isRipple,
		};

		if (this.props.fromBottomToTop && this.props.fromRightToLeft ){
			classes['mdl-menu--top-right'] = true;
		} else if (this.props.fromRightToLeft) {
			classes['mdl-menu--bottom-right'] = true;
		} else if (this.props.fromBottomToTop) {
			classes['mdl-menu--top-left'] = true;
		}

		return cx(classes);
	},

	_getStyle: function() {
		var style = this.props.style;
		style.position = 'relative';
		return style;
	},

	render: function() {

		var list = this.props.menuList.map(function(item, index) {
			return (
				<li key={index} className="mdl-menu__item" style={item.style} {...item.events}>
					{item.text}
				</li>
			);
		});

		return (
			<div style={this._getStyle()}>

				<button id={this.id} className="mdl-button mdl-js-button mdl-button--icon">
					{this.props.Icon}
				</button>
				<ul className={this._getClasses()} htmlFor={this.id}>
					{list}
				</ul>
			</div>
		);
	},

});
