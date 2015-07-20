
/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/layout

	props
		title, string or element
		href, string, 標題的連結
		items, array of object
		headerItems, array of obbject
*/

var React = require('react');
var cx = require('classnames');
var _ = require('lodash');

var Layout = React.createClass({

	propTypes: {
		style : React.PropTypes.object,
		drawerButtonStyle : React.PropTypes.object,
		headerStyle : React.PropTypes.object,
		contentStyle : React.PropTypes.object,
		searchInputStyle : React.PropTypes.object,
		onSearchSubmit : React.PropTypes.func,
		showHeaderSearch : React.PropTypes.bool,
		isFixedHeader : React.PropTypes.bool,
		isScrollHeader : React.PropTypes.bool,
		isFixedDrawer : React.PropTypes.bool,
		isTransparent : React.PropTypes.bool,
		isHideHeaderMenuWhenMobile : React.PropTypes.bool,
		noHeaderTitle : React.PropTypes.bool,
		noDrawerTitle : React.PropTypes.bool,
		title : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element,
		]),
		href : React.PropTypes.string,
		headerItems : React.PropTypes.arrayOf(React.PropTypes.element),
		waterfallItems : React.PropTypes.arrayOf(React.PropTypes.element),
		tabItems : React.PropTypes.arrayOf(React.PropTypes.element),
		drawerItems : React.PropTypes.arrayOf(React.PropTypes.element),
	},

	getDefaultProps: function() {
		return {
			title : '',
			headerItems : [],
			waterfallItems : [],
			tabItems : [],
			drawerItems : [],
			style : {},
		};
	},

	componentDidMount : function() {
		this._mdlize();
	},

	componentDidUpdate: function(prevProps, prevState) {
		this._mdlize();
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

	_generateLinks : function(items, className) {
		return items.map(function(item, index) {
			var newClassName = ('' || item.props.className) + ' ' + className;
			return React.cloneElement(item, {
				key : index,
				className : newClassName,
			});
		});
	},

	_renderHeader : function(titleComponent) {

		if(
			this.props.headerItems.length > 0 ||
			this.props.tabItems.length > 0 ||
			this.props.showHeaderSearch
		) {

			var haderNav = null;
			if(
				this.props.headerItems.length > 0 &&
				!this.props.showHeaderSearch
			) {
				var headerNavClassName = 'mdl-navigation';
				if(this.props.isHideHeaderMenuWhenMobile) {
					headerNavClassName += ' mdl-layout--large-screen-only';
				}
				var items = this._generateLinks(
					this.props.headerItems,
					'mdl-navigation__link'
				);
				haderNav = (
					<nav className={headerNavClassName}>
						{items}
					</nav>
				);
			}

			var headerSearch = null;
			if(this.props.showHeaderSearch) {
				headerSearch = (
					<HeaderSearch
						submit={this.props.onSearchSubmit}
						style={this.props.searchInputStyle}
					/>
				);
			}

			var secondHeaderRow = null;
			if(
				this.props.waterfallItems.length > 0 &&
				this.props.tabItems == 0
			) {
				var items = this._generateLinks(
					this.props.waterfallItems,
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
					<div className="mdl-layout__header-row">
						<div className="mdl-layout-spacer"></div>
						<nav className="waterfall-demo-header-nav mdl-navigation">
							{items}
						</nav>
					</div>
				);
			}

			var headerTab = null;
			if(
				this.props.tabItems.length > 0
			) {
				var tabItems = this._generateLinks(this.props.tabItems, 'mdl-layout__tab');
				headerTab = (
					<div className="mdl-layout__tab-bar mdl-js-ripple-effect">
						{tabItems}
					</div>
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
				this.props.waterfallItems.length > 0 &&
				this.props.tabItems.length == 0
			) {
				className += ' mdl-layout__header--waterfall';
			}

			return (
				<header className={className} style={this.props.headerStyle} >
					<div className="mdl-layout__header-row">
						{!this.props.noHeaderTitle ? titleComponent : null}
						<div className="mdl-layout-spacer"></div>
						{haderNav}
						{headerSearch}
					</div>
					{secondHeaderRow}
					{headerTab}
				</header>
			);

		}

	},

	_renderDrawer : function(titleComponent) {
		if(
			this.props.drawerItems.length > 0
		) {
			var items = this._generateLinks(this.props.drawerItems, 'mdl-navigation__link');
			return (
				<div className="mdl-layout__drawer">
					{!this.props.noDrawerTitle ? titleComponent : null}
					<nav className="mdl-navigation">
						{items}
					</nav>
				</div>
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
		if(this.props.drawerItems.length > 0) {
			classes['mdl-layout--overlay-drawer-button'] = true;
		}
		if(
			this.props.tabItems.length > 0 &&
			this.props.isFixedTabs
		) {
			classes['mdl-layout--fixed-tabs'] = true
		}

		var titleComponent = null;
		if(this.props.title && this.props.href) {
			var style = {
				textDecoration: 'none',
				color : 'inherit',
			};
			titleComponent = (
				<span className="mdl-layout-title">
					<a href={this.props.href} style={style} >
						{this.props.title}
					</a>
				</span>
			);
		} else if(this.props.title) {
			titleComponent = (
				<span className="mdl-layout-title">
					{this.props.title}
				</span>
			);
		}

		return (
			<div className={cx(classes)} style={this.props.style}>
				{this._renderHeader(titleComponent)}
				{this._renderDrawer(titleComponent)}
				<main className="mdl-layout__content">
					<div className="page-content" style={this.props.contentStyle} >
						{this.props.children}
					</div>
				</main>
			</div>
		);

	}

});

var HeaderSearch = React.createClass({

	propTypes: {
		submit : React.PropTypes.func,
		inputStyle : React.PropTypes.object,
	},

	_onKeyPress : function(e) {
		if(
			e.which == 13 &&
			this.props.submit instanceof Function
		) {
			this.props.submit(e);
		}
	},

	render : function() {
		var inputStyle = _.extend({
			borderBottomColor : 'white',
		}, this.props.inputStyle);
		return (
			<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
				<label
					className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp"
				>
					<i className="material-icons">search</i>
				</label>
				<div className="mdl-textfield__expandable-holder">
					<input
						className="mdl-textfield__input" type="text" name="sample"
						id="fixed-header-drawer-exp"
						style={inputStyle}
						onKeyPress={this._onKeyPress}
					/>
				</div>
			</div>
		);
	},

});

module.exports = Layout;
