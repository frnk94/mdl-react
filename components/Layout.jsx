
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

var Layout = React.createClass({

	propTypes: {
		style : React.PropTypes.object,
		drawerStyle : React.PropTypes.object,
		headerStyle : React.PropTypes.object,
		title : React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element,
		]),
		href : React.PropTypes.string,
		onSearchSubmit : React.PropTypes.func,
		isHeaderSearch : React.PropTypes.bool,
		isFixedHeader : React.PropTypes.bool,
		isScrollHeader : React.PropTypes.bool,
		isWaterfallHeader : React.PropTypes.bool,
		isFixedDrawer : React.PropTypes.bool,
		isTransparent : React.PropTypes.bool,
		isHideHeaderMenuWhenMobile : React.PropTypes.bool,
		backgroundImage : React.PropTypes.string,
		noHeaderTitle : React.PropTypes.bool,
		noDrawerTitle : React.PropTypes.bool,
		headerItems : React.PropTypes.arrayOf(React.PropTypes.shape({
			text : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			href : React.PropTypes.string,
			onClick : React.PropTypes.func,
		})),
		drawerItems : React.PropTypes.arrayOf(React.PropTypes.shape({
			text : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			href : React.PropTypes.string,
			onClick : React.PropTypes.func,
			onTouchTap : React.PropTypes.func,
			style : React.PropTypes.object,
		})),
	},

	getDefaultProps: function() {
		return {
			title : '',
			headerItems : [],
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
		if(this.props.drawerStyle) {
			React.findDOMNode(this).getElementsByClassName("mdl-layout__drawer-button")[0].style = this.props.drawerStyle;
		}
	},

	_renderDrawer : function(titleComponent) {
		if(
			this.props.drawerItems.length > 0
		) {
			var drawerItems = this.props.drawerItems.map(function(element, index) {
				return (
					<a className="mdl-navigation__link"
						href={element.href}
						onClick={element.onClick}
						onTouchTap={element.onTouchTap}
						style={element.style}
						key={index}
					>
						{element.text}
					</a>
				);
			});
			return (
				<div className="mdl-layout__drawer">
					{!this.props.noDrawerTitle ? titleComponent : null}
					<nav className="mdl-navigation">
						{drawerItems}
					</nav>
				</div>
			);
		}
	},

	_renderHeader : function(titleComponent) {

		if(
			this.props.headerItems.length > 0 ||
			this.props.isHeaderSearch
		) {

			var haderNav = null;
			if(
				this.props.headerItems.length > 0 &&
				!this.props.isHeaderSearch
			) {
				var headerNavClassName = 'mdl-navigation';
				if(this.props.isHideHeaderMenuWhenMobile) {
					headerNavClassName += ' mdl-layout--large-screen-only';
				}
				var headerItems = this.props.headerItems.map(function(element, index) {
					return (
						<a className="mdl-navigation__link"
							href={element.href}
							onClick={element.onClick}
							key={index}
						>
							{element.text}
						</a>
					);
				});
				haderNav = (
					<nav className={headerNavClassName}>
						{headerItems}
					</nav>
				);
			}

			var headerSearch = null;
			if(this.props.isHeaderSearch) {
				headerSearch = <HeaderSearch submit={this.props.onSearchSubmit} />;
			}

			var className = 'mdl-layout__header';

			if(this.props.isTransparent) {
				className += ' mdl-layout__header--transparent';
			}
			if(this.props.isScrollHeader) {
				className += ' mdl-layout__header--scroll';
			}
			if(this.props.isWaterfallHeader) {
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
				</header>
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

		var style = this.props.style;
		if(this.props.backgroundImage) {
			style = style || {};
			style.background = "url('" + this.props.backgroundImage + "') center / cover";
		}

		var pageContentStyle = {
			minHeight : '1000px',
		};
		return (
			<div className={cx(classes)} style={style}>
				{this._renderHeader(titleComponent)}
				{this._renderDrawer(titleComponent)}
				<main className="mdl-layout__content">
					<div className="page-content" style={pageContentStyle} >
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
						onKeyPress={this._onKeyPress}
					/>
				</div>
			</div>
		);
	},

});

module.exports = Layout;
