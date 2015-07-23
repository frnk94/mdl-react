
"use strict";

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/layout

	props
		title, string or element
		href, string, 標題的連結
		items, array of object
		headerLinks, array of obbject
*/

var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

var Layout = React.createClass({displayName: "Layout",

	propTypes: {

		title : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element,
		]),
		href : React.PropTypes.string,
		noHeaderTitle : React.PropTypes.bool,
		noDrawerTitle : React.PropTypes.bool,

		headerStyle : React.PropTypes.object,
		headerTitleStyle : React.PropTypes.object,
		headerLinks : React.PropTypes.arrayOf(React.PropTypes.element),

		drawerStyle : React.PropTypes.object,
		drawerButtonStyle : React.PropTypes.object,
		drawerTitleStyle : React.PropTypes.object,
		drawerLinks : React.PropTypes.arrayOf(React.PropTypes.element),

		isFixedHeader : React.PropTypes.bool,
		isScrollHeader : React.PropTypes.bool,
		isFixedDrawer : React.PropTypes.bool,

		waterfallLinks : React.PropTypes.arrayOf(React.PropTypes.element),
		tabs : React.PropTypes.arrayOf(React.PropTypes.element),
		initialTabIndex : React.PropTypes.number,
		isFixedTabs : React.PropTypes.bool,

		showHeaderSearch : React.PropTypes.bool,
		onSearchSubmit : React.PropTypes.func,
		searchInputStyle : React.PropTypes.object,

		style : React.PropTypes.object,
		contentStyle : React.PropTypes.object,

		isTransparent : React.PropTypes.bool,
		isHideHeaderMenuWhenMobile : React.PropTypes.bool,

	},

	getDefaultProps: function() {
		return {
			title : '',
			headerLinks : [],
			waterfallLinks : [],
			tabs : [],
			drawerLinks : [],
			style : {},
		};
	},

	componentDidMount : function() {
		this._mdlize();
	},

	componentDidUpdate: function(prevProps, prevState) {
		this._mdlize();
	},

	scrollTop : function() {
		this.refs.mdlContentDiv.getDOMNode().scrollTop = 0;
	},

	_mdlize : function() {
		componentHandler.upgradeDom();
		if(this.props.drawerButtonStyle) {
			var btn = React.findDOMNode(this).getElementsByClassName("mdl-layout__drawer-button");
			if(btn && btn.length > 0) {
				for(var key in this.props.drawerButtonStyle) {
					btn[0].style[key] = this.props.drawerButtonStyle[key];
				}
			}
		}
	},

	_closeDrawer : function() {
		var drawerNode = document.getElementsByClassName('mdl-layout__drawer');
		if(drawerNode && drawerNode.length > 0) {
			drawerNode[0].className = drawerNode[0].className.replace('is-visible', '');
		}
	},

	_generateLinks : function(items, className, activeIndex) {
		var self = this;
		return items.map(function(item, index) {
			var newClassName = (item.props.className || '') + ' ' + className;
			if(
				activeIndex &&
				index == activeIndex
			) {
				newClassName += ' is-active';
			}
			return React.cloneElement(item, {
				key : index,
				className : newClassName,
				onClick : function(e) {
					self._closeDrawer();
				},
				onTouchTap : function(e) {
					self._closeDrawer();
				},
			});
		});
	},

	_renderHeader : function(titleComponent) {

		if(
			this.props.headerLinks.length > 0 ||
			this.props.tabs.length > 0 ||
			this.props.showHeaderSearch
		) {

			var haderNav = null;
			if(
				this.props.headerLinks.length > 0 &&
				!this.props.showHeaderSearch
			) {
				var headerNavClassName = 'mdl-navigation';
				if(this.props.isHideHeaderMenuWhenMobile) {
					headerNavClassName += ' mdl-layout--large-screen-only';
				}
				var items = this._generateLinks(
					this.props.headerLinks,
					'mdl-navigation__link'
				);
				haderNav = (
					React.createElement("nav", {className: headerNavClassName}, 
						items
					)
				);
			}

			var headerSearch = null;
			if(this.props.showHeaderSearch) {
				headerSearch = (
					React.createElement(HeaderSearch, {
						submit: this.props.onSearchSubmit, 
						style: this.props.searchInputStyle}
					)
				);
			}

			var secondHeaderRow = null;
			if(
				this.props.waterfallLinks.length > 0 &&
				this.props.tabs == 0
			) {
				var items = this._generateLinks(
					this.props.waterfallLinks,
					'mdl-navigation__link'
				);
				if(
					this.props.showHeaderSearch &&
					items.length > 0
				) {
					items[items.length - 1] = React.cloneElement(
						items[items.length - 1],
						{
							style : { paddingRight : 0 },
						}
					);
				}
				secondHeaderRow = (
					React.createElement("div", {className: "mdl-layout__header-row"}, 
						React.createElement("div", {className: "mdl-layout-spacer"}), 
						React.createElement("nav", {className: "waterfall-demo-header-nav mdl-navigation"}, 
							items
						)
					)
				);
			}

			var headerTabs = null;
			if(
				this.props.tabs.length > 0
			) {
				var tabs = this._generateLinks(
					this.props.tabs, 'mdl-layout__tab', this.props.initialTabIndex
				);
				headerTabs = (
					React.createElement("div", {className: "mdl-layout__tab-bar mdl-js-ripple-effect"}, 
						tabs
					)
				);
			}

			var className = 'mdl-layout__header';
			if(this.props.isTransparent) {
				className += ' mdl-layout__header--transparent';
			}
			if(this.props.isScrollHeader) {
				className += ' mdl-layout__header--scroll';
			}
			if(
				this.props.waterfallLinks.length > 0 &&
				this.props.tabs.length == 0
			) {
				className += ' mdl-layout__header--waterfall';
			}

			return (
				React.createElement("header", {className: className, style: this.props.headerStyle}, 
					React.createElement("div", {className: "mdl-layout__header-row"}, 
						
							!this.props.noHeaderTitle
							? this._rendreTitle(this.props.headerTitleStyle)
							: null, 
						
						React.createElement("div", {className: "mdl-layout-spacer"}), 
						haderNav, 
						headerSearch
					), 
					secondHeaderRow, 
					headerTabs
				)
			);

		}

	},

	_renderDrawer : function(titleComponent) {
		if(
			this.props.drawerLinks.length > 0
		) {
			var items = this._generateLinks(this.props.drawerLinks, 'mdl-navigation__link');
			return (
				React.createElement("div", {className: "mdl-layout__drawer", style: this.props.drawerStyle}, 
					
						!this.props.noDrawerTitle
						? this._rendreTitle(this.props.drawerTitleStyle)
						: null, 
					
					React.createElement("nav", {className: "mdl-navigation"}, 
						items
					)
				)
			);
		}


	},

	_rendreTitle : function(style) {
		if(this.props.title && this.props.href) {
			style = _.extend({
				textDecoration: 'none',
				color : 'inherit',
			}, style);
			return (
				React.createElement("span", {className: "mdl-layout-title"}, 
					React.createElement("a", {href: this.props.href, style: style}, 
						this.props.title
					)
				)
			);
		} else if(this.props.title) {
			return (
				React.createElement("span", {className: "mdl-layout-title", style: style}, 
					this.props.title
				)
			);
		}
	},

	render: function() {

		var classes = {
			'mdl-layout' : true,
			'mdl-js-layout' : true,
		};
		if(this.props.isFixedHeader) {
			classes['mdl-layout--fixed-header'] = true;
		}
		if(this.props.isFixedDrawer) {
			classes['mdl-layout--fixed-drawer'] = true;
		}
		if(this.props.drawerLinks.length > 0) {
			classes['mdl-layout--overlay-drawer-button'] = true;
		}
		if(
			this.props.tabs.length > 0 &&
			this.props.isFixedTabs
		) {
			classes['mdl-layout--fixed-tabs'] = true
		}

		return (
			React.createElement("div", {className: cx(classes), style: this.props.style}, 
				this._renderHeader(), 
				this._renderDrawer(), 
				React.createElement("main", {className: "mdl-layout__content", ref: "mdlContentDiv"}, 
					React.createElement("div", {className: "page-content", style: this.props.contentStyle}, 
						this.props.children
					)
				)
			)
		);

	}

});

var counter = 0;

var HeaderSearch = React.createClass({displayName: "HeaderSearch",

	propTypes: {
		submit : React.PropTypes.func,
		inputStyle : React.PropTypes.object,
	},

	_onKeyPress : function(e) {
		if(
			e.which == 13 &&
			this.props.submit instanceof Function
		) {
			console.log(this.refs.input.getDOMNode().value);
			this.props.submit(this.refs.input.getDOMNode().value);
		}
	},

	render : function() {
		var inputId = 'fixed-header-drawer-exp-' + (++counter);
		var inputStyle = _.extend({
			borderBottomColor : 'white',
		}, this.props.inputStyle);
		return (
			React.createElement("div", {className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right"}, 
				React.createElement("label", {
					className: "mdl-button mdl-js-button mdl-button--icon", 
					htmlFor: inputId
				}, 
					React.createElement("i", {className: "material-icons"}, "search")
				), 
				React.createElement("div", {className: "mdl-textfield__expandable-holder"}, 
					React.createElement("input", {ref: "input", 
						className: "mdl-textfield__input", 
						type: "text", 
						name: "sample", 
						id: inputId, 
						style: inputStyle, 
						onKeyPress: this._onKeyPress}
					)
				)
			)
		);
	},

});

module.exports = Layout;
