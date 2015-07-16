
var React = require('react');
var cx = require('classnames');

/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		children: isRequired, button element
 *		buttonId: isRequired, String, 綁定到的 Button ID，Make sure the ID is a unique.
 *		menuList: isRequired, Array of Object, Object can contains 4 propetires:
 *			text, isRequired, must be String or React Component
 *			events, Object, propetires should be React events
 *			style, Object, 選項個別CSS樣式
 *			isDiasbled, bool, 是否關閉選項
 *		fromRightToLeft: Meun展開動畫是否從左到右, default false
 *		fromBottomToTop: Meun展開動畫是否從下到上, default false
 *		isRipple: 是否使用Ripple動畫，default true
 *		style: Object, Menu List 整體 CSS 樣式
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
		children: React.PropTypes.node.isRequired,
		//buttonId: React.PropTypes.string.isRequired,
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
			isDiasbled: React.PropTypes.bool,
		})).isRequired,
	},

	id: 'mdl-menu-',

	componentWillMount: function() {
		if(this.props.children instanceof Array){
			console.warn("MDL.Menu: Menu should only have one child inside");
		}
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

	_getChild: function() {
		if (this.props.children instanceof Array){
			return React.cloneElement(this.props.children[0], {id: this.id});
		} else if (this.props.children) {
			return React.cloneElement(this.props.children, {id: this.id});
		} else {
			return <div/>;
		}
	},

	render: function() {

		var style = this.props.style;
		style.position = 'relative';

		var list = this.props.menuList.map(function(item, index) {
			return (
				<li key={index} disabled={item.isDisabled} className="mdl-menu__item" style={item.style} {...item.events} >
					{item.text}
				</li>
			);
		});

		return (
			<div style={style}>
				{this._getChild()}
				<ul className={this._getClasses()} htmlFor={this.id}>
					{list}
				</ul>
			</div>
		);
	},

});
