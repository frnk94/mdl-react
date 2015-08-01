
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
var _HeaderTitle = require('./LayoutComponents/_HeaderTitle.jsx');
var _HeaderSearch = require('./LayoutComponents/_HeaderSearch.jsx');
var _HeaderTabs = require('./LayoutComponents/_HeaderTabs.jsx');
var _HeaderWaterfall = require('./LayoutComponents/_HeaderWaterfall.jsx');
var HeaderNav = require('./LayoutComponents/HeaderNav.jsx');

module.exports = React.createClass({

	displayName : 'Layout',

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
		// headerLinks : React.PropTypes.arrayOf(React.PropTypes.element),

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
		// this._getChildrenByClass();
		this._mdlize();
	},

	componentDidUpdate: function(prevProps, prevState) {
		this._mdlize();
	},

	scrollTop : function() {
		this.refs.mdlContentDiv.getDOMNode().scrollTop = 0;
	},

	_getChildrenByClass : function() {
		_.forEach(this.props.children, function(child) {
			console.log('_getChildrenByClass', child.type == HeaderNav);
		});
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
			// console.log(item.props, item.props.onClick instanceof Function);
			return React.cloneElement(item, {
				key : index,
				className : newClassName,
				onClick : function(e) {
					// console.log('link.onClick');
					self._closeDrawer();
					if(item.props.onClick instanceof Function) {
						item.props.onClick(e);
					}
				},
				onTouchTap : function(e) {
					self._closeDrawer();
					if(item.props.onTouchTap instanceof Function) {
						item.props.onTouchTap(e);
					}
				},
			});
		});
	},

	_renderHeader : function(titleComponent) {

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

		// var secondHeaderRow = null;
		// if(
		// 	this.props.waterfallLinks.length > 0 &&
		// 	this.props.tabs == 0
		// ) {
		// 	var items = this._generateLinks(
		// 		this.props.waterfallLinks,
		// 		'mdl-navigation__link'
		// 	);
		// 	if(
		// 		this.props.showHeaderSearch &&
		// 		items.length > 0
		// 	) {
		// 		items[items.length - 1] = React.cloneElement(
		// 			items[items.length - 1],
		// 			{
		// 				style : { paddingRight : 0 },
		// 			}
		// 		);
		// 	}
		// 	secondHeaderRow = (
		// 		<div className="mdl-layout__header-row">
		// 			<div className="mdl-layout-spacer"></div>
		// 			<nav className="waterfall-demo-header-nav mdl-navigation">
		// 				{items}
		// 			</nav>
		// 		</div>
		// 	);
		// }

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
					React.createElement(_HeaderTitle, {
						disabled: this.props.noHeaderTitle, 
						style: this.props.headerTitleStyle
					}, 
						this.props.title
					), 
					React.createElement("div", {className: "mdl-layout-spacer"}), 
					haderNav, 
					React.createElement(_HeaderSearch, {
						enabled: this.props.showHeaderSearch, 
						submit: this.props.onSearchSubmit, 
						style: this.props.searchInputStyle
					})
				), 
				React.createElement(_HeaderWaterfall, {
					disabled: this.props.tabs > 0 || this.props.waterfallLinks == 0, 
					children: this.props.waterfallLinks, 
					showHeaderSearch: this.props.showHeaderSearch}
				), 
				React.createElement(_HeaderTabs, {
					activeIndex: this.props.initialTabIndex, 
					children: this.props.tabs}
				)
			)
		);

	},

	_renderDrawer : function(titleComponent) {
		if(
			this.props.drawerLinks.length > 0
		) {
			var items = this._generateLinks(this.props.drawerLinks, 'mdl-navigation__link');
			return (
				React.createElement("div", {className: "mdl-layout__drawer", style: this.props.drawerStyle}, 
					React.createElement(_HeaderTitle, {
						disabled: this.props.noDrawerTitle, 
						style: this.props.drawerTitleStyle
					}, 
						this.props.title
					), 
					React.createElement("nav", {className: "mdl-navigation"}, 
						items
					)
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
