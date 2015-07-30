
'use strict';

var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

/**
 *	MENUS
 *		http://www.getmdl.io/components/index.html#menus-section
 *	Props
 *		children: isRequired, it must have one clickable element and at least menu item.
 *		openDirection: Placement of the menu relative to the IconButton.
 *		isRipple: 是否使用Ripple動畫，default true
 *		style: Object, Menu List 整體 CSS 樣式
 */

var id = 1;

module.exports = React.createClass({displayName: "exports",

	getDefaultProps: function() {
		return {
			style: {},
			openDirection: 'bottom-left',
			isRipple: true,
		};
	},

	propTypes: {
		// children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
		openDirection: React.PropTypes.oneOf([
			'bottom-left',
			'bottom-right',
			'top-left',
			'top-right',
		]),
		isRipple: React.PropTypes.bool,
		style: React.PropTypes.object,
		children : function(props, propName, componentName) {
        	if(!_.isArray(props[propName])) {
				throw new Error('MDL.Menu: children should be an array');
			}
			if(props[propName].length < 2) {
				throw new Error('MDL.Menu:  the length children should be greater than 2');
			}
        },
	},

	id: 'mdl-menu-',

	componentWillMount: function() {
		this.id += id++;
	},

	componentDidMount: function() {
		componentHandler.upgradeDom();
	},

	_getFlatenChildren : function() {
		// flaten children
		return _.reduce(
			[].concat(this.props.children),
			function(prev, curr) {
				return prev.concat(curr);
			},
			[]
		);
	},

	_getClasses: function() {
		var classes = {
			"mdl-menu": true,
			"mdl-js-menu": true,
			"mdl-js-ripple-effect": this.props.isRipple,
		};
		if (this.props.openDirection === 'top-right') {
			classes['mdl-menu--top-right'] = true;
		} else if (this.props.openDirection === 'bottom-right') {
			classes['mdl-menu--bottom-right'] = true;
		} else if (this.props.openDirection === 'top-left') {
			classes['mdl-menu--top-left'] = true;
		}
		return cx(classes);
	},

	render: function() {

		var style = this.props.style;
		style.position = 'relative';

		var list = null;
		list = this._getFlatenChildren().map(function(child, index) {
			if(index == 0) return;	// 忽略按鈕
			return (
				React.createElement("li", {key: index, disabled: child.props.disabled, className: "mdl-menu__item"}, 
					child
				)
			);
		});

		return (
			React.createElement("div", {style: style}, 
				React.createElement(MenuBtn, null, 
					this.props.children[0]
				), 
				React.createElement("ul", {className: this._getClasses(), htmlFor: this.id}, 
					list
				)
			)
		);

	},

});

var MenuBtn = React.createClass({displayName: "MenuBtn",
	propTypes: {
		children : React.PropTypes.element.isRequired,
	},
	render: function() {
		return React.cloneElement(this.props.children, {id: this.id});
	},
});
